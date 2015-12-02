console.log("this is a test");

var http = require('http');
var url = require('url');
var fs = require('fs');
var homePageHtml = fs.readFileSync('homePageHtml.html');

function renderNewPage(request, response){
	response.writeHead(200, {
		'Content-type': 'text/html'
	});
	response.write('Hello World!');
	response.end();
};

function renderHomePage(request, response){
	response.writeHead(200, {
		'Content-type': 'text/html'
	});
	response.end(homePageHtml);
};

function rendor404(request, response){
	response.writeHead(404);
	response.end('404, page not found');
};

var server = http.createServer(function(request, response){

	var newUrl = '/page/new';
	// renderNewPage(request, response);
	// console.log(newUrl);
	var pathName = url.parse(request.url);
	console.log(request.url);
	console.log(pathName);
	if(newUrl == pathName.pathname){
		renderNewPage(request, response);
	}else if(pathName.pathname == '/'){
		renderHomePage(request, response);
	}else{
		rendor404(request, response);
	}
});

server.listen(8081);

console.log('server is listening on port 8081.');
console.log('test nodemon');


