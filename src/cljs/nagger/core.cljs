(ns ^:figwheel-always nagger.core
	(:require[om.core :as om :include-macros true]
					 [om.dom :as dom :include-macros true]
					 [goog.string :as gstring]
					 [goog.string.format]
					 [clojure.string :as string]
					 [nagger.util :as util]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defn dur-dict [mode]
	(let [dict {:work (* #_12 52 60 1000)
							:play (* 17 60 1000)}] (get dict mode)))

(def messages
	{:work ["You're not on reddit, are you?"
					"Facebook is distracting, isn't it?"
					"Cup noodles are bad."
					"I wish I were with you."
					"Remember, sweets make you sleepy."]
	 :play ["Are you resting?"
					"Take a walk!"
					"Don't think about work!"
					"Think about me instead."]})

(defn sample-message [mode]
	(let [mode-messages (get messages mode)]
		(nth mode-messages (rand-int (count mode-messages)))))

(defonce app-state (atom {:target-time (+ (.now js/Date) (dur-dict :work))
													:current-time (.now js/Date)
													:mode :work
													:current-message (sample-message :work)
													:message-interval (* 3 60 1000)
													:last-message-sent (.now js/Date)}))

(defn split-time-UTC
	[time]
	{:hours (-> time .getUTCHours util/pad-two)
	 :minutes (-> time .getUTCMinutes util/pad-two)
	 :seconds (-> time .getUTCSeconds util/pad-two)})

(defn polar-loader [{:keys [percentage progress-thickness]} owner]
	(reify
		om/IRender
		(render [this]
						(let [PI (.-PI js/Math)
									theta (- (* percentage 2 PI) (* 0.5 PI))
									init-x 50
									init-y 50
									radius (- 50 (/ progress-thickness 2))
									x (+ init-x (* radius (.cos js/Math theta)))
									y (+ init-y (* radius (.sin js/Math theta)))
									d-vec [["M"
													init-x
													(- init-y radius)]
												 ["A"
													radius radius 0
													(if (> theta (* 0.5 PI)) 1 0)
													1
													x y]]]
							(dom/svg #js {:className "polar-loader"
														:viewBox "0 0 100 100"}
											 (dom/circle #js {:className "loader-elem track"
																				:cx init-x :cy init-y :r radius})
											 (when (<= percentage 1)
												 (dom/path #js {:className "loader-elem progress"
																				:strokeWidth progress-thickness
																				:d (->> d-vec (flatten) (string/join " "))})))))))

(defonce interval
	(js/setInterval (fn []
										(let [cursor (om/root-cursor app-state)
													target-time (:target-time cursor)
													current-time (:current-time cursor)
													last-message-sent (:last-message-sent cursor)
													message-interval (:message-interval cursor)
													mode (:mode cursor)]

											(om/update! cursor :current-time (.now js/Date))

											(when (>= (- current-time last-message-sent) message-interval)
												(do
													(om/transact! cursor :current-message #(sample-message mode))
													(om/update! cursor :last-message-sent current-time)))
											(when (<= target-time current-time)
												(do
													(om/update! cursor :mode (if (= mode :work) :play :work))
													(om/transact! cursor :target-time #(+ % (dur-dict (if (= mode :work) :play :work)))))))) 16))

(defn countdown [cursor owner]
	(reify
		om/IRender
		(render [this]
						(let [target-time (:target-time cursor)
									current-time (:current-time cursor)
									current-count (util/second-round (- target-time current-time))
									{:keys [_ minutes seconds]} (split-time-UTC (js/Date. current-count))]
							(dom/div #js {:className "timer"}
											 minutes ":" seconds)))))

(om/root
 (fn [data owner]
	 (reify
		 om/IRender
		 (render [this]
						 (let [mode (:mode data)
									 labels {:work "Work" :play "Play"}
									 percentage (- 1 (/ (- (:target-time data) (:current-time data)) (dur-dict (:mode data))))]
							 (dom/div #js {:className (string/join " " ["container" (get {:play "play" :work "work"} (:mode data))])}
												(dom/div #js {:className "nagger"}

																 (dom/div #js {:className "clock-container"}
																					(dom/div #js {:className "clock"}
																									 (dom/h2 nil (get labels mode))
																									 (dom/h1 nil (om/build countdown data)))
																					(om/build polar-loader {:percentage percentage
																																	:progress-thickness 6})

																					(dom/div #js {:className (string/join " " ["wiper" "play-wiper" (when (= (:mode data) :play) "active")] )})
																					(dom/div #js {:className (string/join " " ["wiper" "work-wiper" (when (= (:mode data) :work) "active")] )})))
												(dom/h3 #js {:className "message"}
																(:current-message data)))))))
 app-state
 {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
	;; optionally touch your app-state to force rerendering depending on
	;; your application
	;; (swap! app-state update-in [:__figwheel_counter] inc)
	)

