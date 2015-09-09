(ns ^:figwheel-always nagger.core
	(:require[om.core :as om :include-macros true]
					 [om.dom :as dom :include-macros true]
					 [goog.string :as gstring]
					 [goog.string.format]
					 [nagger.util :as util]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defn dur-dict [mode]
	(let [dict {:work (* 52 60 1000)
							:play (* 17 60 1000)}] (get dict mode)))

(def messages
	{:work ["You're not on reddit, are you?"
					"Facebook is distracting, isn't it?"
					"Cup noodles are bad."
					"I wish I were with you."]
	 :play ["Are you resting?"
					"Take a walk!"]})

(defn sample-message [mode]
	(let [mode-messages (get messages mode)]
		(nth mode-messages (rand-int (count mode-messages)))))

(defonce app-state (atom {:target-time (+ (.now js/Date) (dur-dict :work))
													:current-time (.now js/Date)
													:mode :work
													:current-message (sample-message :work)
													:message-interval (* 3 60 1000)}))

(defn split-time-UTC
	[time]
	{:hours (-> time .getUTCHours util/pad-two)
	 :minutes (-> time .getUTCMinutes util/pad-two)
	 :seconds (-> time .getUTCSeconds util/pad-two)})

(defonce interval
	(js/setInterval (fn []
										(let [cursor (om/root-cursor app-state)
													target-time (:target-time cursor)
													current-time (:current-time cursor)
													mode (:mode cursor)]
											(om/update! cursor :current-time (.now js/Date))
											(when (zero? (mod (util/second-round (- target-time current-time)) (:message-interval cursor)))
												(om/transact! cursor :current-message #(sample-message mode)))
											(when (<= target-time (+ 1000 current-time))
												(do
													(om/update! cursor :mode (if (= mode :work) :play :work))
													(om/transact! cursor :current-message #(sample-message mode))
													(om/transact! cursor :target-time #(+ % (dur-dict (if (= mode :work) :play :work)))))))) 1000))

(defn countdown [cursor owner {:keys [on-times-up]}]
	(reify
		om/IRenderState
		(render-state [this state]
									(let [target-time (:target-time cursor)
												current-time (:current-time cursor)
												current-count (util/second-round (- target-time current-time))
												{:keys [hours minutes seconds]} (split-time-UTC (js/Date. current-count))]
										(dom/div #js {:className "timer"}
														 hours ":" minutes ":" seconds)))))
(om/root
 (fn [data owner]
	 (reify
		 om/IRenderState
		 (render-state [this state]
									 (let [mode (:mode data)
												 labels {:work "Work" :play "Play"}]
										 (dom/div #js {:className "container"}
															(dom/div #js {:className "nagger"}
																			 (get labels mode)
																			 (dom/h1 #js {:className "clocK"}
																							 (om/build countdown data))
																			 (:current-message data)))))))
 app-state
 {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

