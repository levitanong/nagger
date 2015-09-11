(ns figwheel.connect (:require [nagger.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :on-jsload (fn [& x] (if js/nagger.core.on-js-reload (apply js/nagger.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'nagger.core/on-js-reload' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})

