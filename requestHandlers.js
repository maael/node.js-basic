var querystring = require("querystring"),
	fs = require("fs"),
	jade = require("jade");
function renderJadeFile(template,templateOptions,response) {
  	fs.readFile("./views/"+template, 'utf8', function (err, data) {
	    if (err) throw err;
	    var fn = jade.compile(data);
	    var html = fn(templateOptions);
	    response.end(html);
	});
}
function start(response,request){
	console.log("Request handler 'start' was called.");
	response.writeHead(200,{"Content-Type":"text/html"});
	renderJadeFile("index.jade",{name:"Matt"},response);
}
exports.start = start;