(set-env!
 :dependencies '[[adzerk/boot-cljs          "1.7.48-5"]
								 [adzerk/boot-cljs-repl     "0.2.0"]
								 [adzerk/boot-reload        "0.4.0"]
								 [hoplon/boot-hoplon        "0.1.10"]
								 [hoplon/hoplon             "6.0.0-alpha10"]
								 [org.clojure/clojure       "1.7.0"]
								 [org.clojure/clojurescript "1.7.122"]
								 [tailrecursion/boot-jetty  "0.1.0"]
								 [garden "1.3.0-SNAPSHOT"]
								 [jeluard/boot-notify "0.2.0" :scope "test"]]
 :source-paths #{"src/clj" "src/cljs" "src/hl" "src/tasks" "src/garden"}
 :asset-paths  #{"assets"})

(require
 '[adzerk.boot-cljs         :refer [cljs]]
 '[adzerk.boot-cljs-repl    :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload       :refer [reload]]
 '[hoplon.boot-hoplon       :refer [hoplon prerender]]
 '[tailrecursion.boot-jetty :refer [serve]]
 '[nagger.boot-garden :refer [garden]]
 '[jeluard.boot-notify :refer [notify]])

(deftask dev
	"Build nagger for local development."
	[]
	(comp
	 (watch)
	 (speak)
	 (notify)
	 (hoplon)
	 (reload)
	 (cljs-repl)
	 (cljs)
	 (garden :styles-var 'nagger.styles/base
					 :output-to "assets/main.css"
					 :vendors ["webkit" "moz"]
					 :auto-prefix [:transition-duration :transition-property :transform])
	 (serve :port 8000)))

(deftask prod
	"Build nagger for production deployment."
	[]
	(comp
	 (hoplon)
	 (cljs :optimizations :advanced)
	 (garden :styles-var 'nagger.styles/base
					 :output-to "assets/main.css"
					 :vendors ["webkit" "moz"]
					 :auto-prefix [:transition-duration :transition-property :transform])
	 (prerender)))
