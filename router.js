var fs = require("fs"),
	path = require("path");
function route(handle,pathname,response,request){
	console.log("About to route a request for "+pathname);
	if(typeof handle[pathname]==='function'){
		handle[pathname](response,request);
	} else {
		console.log("No request handler found for "+pathname);
		response.writeHead(404,{"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}
function routeStatic(pathname,response){
	var ext = path.extname(pathname);
    switch(ext) {
        case '.css':
            response.writeHead(200, {"Content-Type": "text/css"});
            fs.readFile('./' + pathname, 'utf8', function(err, fd) {
                response.end(fd);
            });
            console.log('Routed for Cascading Style Sheet '+ pathname +' Successfully\n');
        break;
        case '.js':
            response.writeHead(200, {"Content-Type": "text/javascript"});
            fs.readFile('./' + pathname, 'utf8', function(err, fd) {
                response.end(fd);
            });
            console.log('Routed for Javascript '+ pathname +' Successfully\n');
        break;
        case '.png':
        console.log(pathname);
            response.writeHead(200,{"Content-Type":"image/png"});
            fs.createReadStream("./"+pathname).pipe(response);
        break;
    }
}
exports.route = route;
exports.routeStatic = routeStatic;