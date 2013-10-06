var server = require("./server"),
	router = require("./router"),
	handle = require("./routes").handle;

server.start(router.route, router.routeStatic,handle);