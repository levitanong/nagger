(ns nagger.style
	(:require [garden.def :refer [defstylesheet defstyles]]
						[garden.units :as u :refer [px percent]]))

(def display-flex (sorted-set "-webkit-box" "-moz-box" "-webkit-flex" "-moz-flex" "box" "flex"))
(def fill {:position "absolute" :top 0 :bottom 0 :left 0 :right 0})
(def accent "#aa0808")

(defn align-items [value]
	{:-webkit-align-items value :align-items value})
(defn justify-content [value]
	{:-webkit-justify-content value :justify-content value})


(def font-family "\"Open Sans\"")
#_(println u)

(defstyles screen
	[:body
	 (merge fill
					{:font-family font-family
					 :margin 0})]
	[:.timer
	 {:font-size (px 36)
		:font-weight 300}]
	[:.container
	 (merge fill
					(align-items "center")
					(justify-content "center")
					{:display display-flex
					 :width (percent 100)
					 :height (percent 100)})]
	[:.nagger
	 {:width (px 300)
		;:min-width (px 320)
		}]

	[:.clock-container
	 {:position "relative"
		:width (px 300)}

	 [:.clock
		{:position "absolute"
		 :top (percent 50)
		 :transform "translateY(-50%)"
		 :width (percent 100)
		 :text-align "center"}
		[:h1 :h2
		 {:margin 0}]]]

	[:.polar-loader
	 {:width (px 300)
		:height (px 300)}
	 [:.loader-elem
		{:stroke accent
		 :fill "transparent"}
		[:&.progress
		 {:stroke-width 8
			:stroke-linecap "round"}]]])
