(ns ^:figwheel-always nagger.core
	(:require[om.core :as om :include-macros true]
					 [om.dom :as dom :include-macros true]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:target-time (+ (.now js/Date) (* 5 1000))
													:current-time (.now js/Date)}))

(defn split-time-UTC
	[time]
	{:hours (.getUTCHours time)
	 :minutes (.getUTCMinutes time)
	 :seconds (.getUTCSeconds time)})

(defn min-to-ms [min] (* min 60 1000))

(defn countdown [cursor owner {:keys [on-times-up]}]
	(reify
		;om/IWillMount
		#_(will-mount [_]
								(js/setInterval (fn []
																	(println target-time #_(- (.valueOf target-time) (.now js/Date)))
																	(if (> target-time (.now js/Date))
																		(om/refresh! owner)
																		(on-times-up))) 1000))
		om/IRenderState
		(render-state [this state]
									(let [target-time (:target-time cursor)
												current-time (:current-time cursor)
												current-count (- target-time current-time)
												{:keys [hours minutes seconds]} (split-time-UTC (js/Date. (+ 1000 current-count)))]
										(dom/div nil
														 hours ":" minutes ":" seconds)))))

(defonce interval (js/setInterval (fn []
																		(let [cursor (om/root-cursor app-state)
																					target-time (:target-time cursor)
																					current-time (:current-time cursor)]

																			(om/update! cursor :current-time (.now js/Date))
																			(when (<= target-time current-time)
																				(om/transact! cursor :target-time #(+ % (* 5 1000)))))) 1000))

(om/root
 (fn [data owner]
	 (reify
		 om/IRenderState
		 (render-state [this state]
									 (dom/h1 nil
													 (:text data)
													 (om/build countdown data)))))
 app-state
 {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

