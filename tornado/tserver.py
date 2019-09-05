import sys
import tornado.web
import tornado.ioloop

class size500Handler(tornado.web.RequestHandler):
    def get(self):
        self.render("../html_files/index500.html")

class size20kHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("../html_files/index20.html")

def app500():
    app = tornado.web.Application([
        (r"/", size500Handler)
    ])
    app.listen(8080)
    print("I'm listening on port 8080")
    tornado.ioloop.IOLoop.current().start()

def app20k():
    app = tornado.web.Application([
        (r"/", size20kHandler)
    ])
    app.listen(8080)
    print("I'm listening on port 8080")
    tornado.ioloop.IOLoop.current().start()

if __name__ == "__main__":
    if (sys.argv[1] == "index500.html") :
        app500()
    elif (sys.argv[1] == "index20.html") :
        app20k()
