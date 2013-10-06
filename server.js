var http = require("http"),
	url = require("url"),
	path = require("path");
function start(route,routeStatic,handle){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for "+pathname+" received");
		if(path.dirname(pathname).split("/")[1]=="public"){
			console.log("Routing static");
			routeStatic(pathname,response);
		} else{
			console.log("Routing normal");	
			route(handle,pathname,response,request);
		}		
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}
exports.start = start;