var requestHandlers = require("./requestHandlers");
exports.handle = {
	"/":requestHandlers.start,
	"/start":requestHandlers.start
}