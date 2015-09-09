(ns nagger.util
	(:require [goog.string :as gstring]
						[goog.string.format]))

(defn pad-two [n] (gstring/format "%02d" n))

(defn second-round [n] (* 1000 (.ceil js/Math (/ n 1000))))