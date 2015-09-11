(ns nagger.style
	(:require [garden.def :refer [defstylesheet defstyles]]
						[garden.units :as u :refer [px percent s]]))

(def display-flex (sorted-set "-webkit-box" "-moz-box" "-webkit-flex" "-moz-flex" "box" "flex"))
(def fill {:position "absolute" :top 0 :bottom 0 :left 0 :right 0})
(def accent "#D81E5B")
(def light "#FDF0D5")

(defn align-items [value]
	{:-webkit-align-items value :align-items value})
(defn justify-content [value]
	{:-webkit-justify-content value :justify-content value})
(defn flex-direction [value]
	{:-webkit-flex-direction value :flex-direction value})


(def font-family "\"Open Sans\"")

(defstyles screen
	[:body
	 (merge fill
					{:font-family font-family
					 :margin 0
					 :overflow "hidden"
					 :background-color light})]
	[:.timer
	 {:font-size (px 36)
		:font-weight 300}]

	[:#loading
	 {:text-align "center"
		:margin-top (px 36)
		:color accent}]

	[:.container
	 (merge fill
					(align-items "center")
					(justify-content "center")
					(flex-direction "column")
					{:display display-flex
					 :width (percent 100)
					 :height (percent 100)
					 :color accent
					 :transition-delay (s 0.4)
					 :transition "background-color 0.4s"})]

	[:.nagger
	 {:width (px 240)
		:height (px 240)}]

	[:.clock-container
	 {:position "relative"
		:width (percent 100)}

	 [:.clock
		{:position "absolute"
		 :top (percent 50)
		 :transform "translateY(-50%)"
		 :width (percent 100)
		 :text-align "center"}
		[:h1 :h2
		 {:margin 0}]]]

	[:.polar-loader
	 {:width (percent 100)
		:height (percent 100)}

	 [:.loader-elem
		{:stroke accent
		 :fill "transparent"}

		[:&.track
		 {:stroke-width 1
			:vector-effect "non-scaling-stroke"}]

		[:&.progress
		 {:stroke-linecap "round"
			:vector-effect "non-scaling-stroke"}]]]

	[:.wiper
	 {:transition "width 0.4s, height 0.4s"
		:position "absolute"
		:left (percent 50)
		:top (percent 50)
		:margin-top (px -2)
		:margin-left (px -2)
		:transform "translateY(-50%) translateX(-50%)"
		:height (px 0)
		:width (px 0)
		:z-index -100
		:border-radius (percent 50)}
	 [:&.play-wiper
		{:background-color accent}]
	 [:&.work-wiper
		{:background-color light}]
	 [:&.active
		{:z-index -99
		 :width (px 2000)
		 :height (px 2000)}]]

	[:.play
	 {:color light
		:background-color accent}
	 [:.loader-elem
		{:stroke light}]]

	)
