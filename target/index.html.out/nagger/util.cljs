(ns nagger.util
	(:require [goog.string :as gstring]
						[goog.string.format]))

(defn pad
	"pad v with 0s up to n digits"
	[n v] (gstring/format (str "%0" n "d") v))

(defn round
	"Round v to place n"
	[n v] (* n (.ceil js/Math (/ v n))))