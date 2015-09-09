(ns nagger.style
	(:require [garden.def :refer [defstylesheet defstyles]]
						[garden.units :refer [px]]))

(def font-family "\"Open Sans\"")

(defstyles screen
	[:body
	 {:font-family font-family}]
	[:.timer
	 {:font-size (px 36)}])