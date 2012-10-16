(ns ring-amber.core
  (:use [ring.middleware.file :only [wrap-file]]
        [ring.middleware.file-info :only [wrap-file-info]]
        [compojure.core :only [defroutes routes GET PUT POST ANY]])
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.response :as res]
            [fs.core :as fs]))

(defn put-file [request dir filename]
  (let [dir-path (str "resources/public" dir)]
    (fs/mkdirs dir-path)
    (spit (str dir-path "/" filename)
          (slurp (:body request)))))

(spit "example.txt" "/Users/Chris/dev/play/ring-amber/src/rin")

(defroutes base-handler
  (GET "/" request (res/redirect "projects/hello/"))
  (GET "/if.jpg" request (res/header
                          (res/file-response "projects/hello/if.jpg")
                          "Content-Disposition" "attachment; filename=\"if.jpeg\""))
  (PUT [":path/:filename" :path #".*" :filename #".*\.(js|st)"]
      [path filename :as request]
    (put-file request path filename)
    "Put Successful")

  (ANY "*" request "page not found"))

(defn start [& [port]]
  (jetty/run-jetty
   (-> #'base-handler
    (wrap-file "resources/public")
    wrap-file-info)
   {:port (or port 4001) :join? false}))

(defn -main [] (start))

(comment

  (def a (start))
  (.stop a)

)
