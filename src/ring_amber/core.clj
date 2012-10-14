(ns ring-amber.core
  (:use [ring.middleware.file :only [wrap-file]]
        [ring.middleware.file-info :only [wrap-file-info]]
        [compojure.core :only [defroutes routes GET PUT POST ANY]])
  (:require [ring.adapter.jetty :as jetty]
            [fs.core :as fs]))

(defn put-file [request dir filename]
  (let [dir-path (str "resources/public" dir)]
    (fs/mkdirs dir-path)
    (spit (str dir-path "/" filename)
     (slurp (:body request)))))

(defroutes base-handler
  (PUT [":path/:filename" :path #".*" :filename #".*\.(js|st)"]
      [path filename :as request]
    (put-file request path filename))

  (ANY "*" request "page not found"))

(defn start [& [port]]
  (jetty/run-jetty
   (-> #'base-handler
    (wrap-file "resources/public")
    wrap-file-info)
   {:port (or port 4000) :join? false}))

(defn -main [] (start))

(comment

  (def a (start))
  (.stop a)

)
