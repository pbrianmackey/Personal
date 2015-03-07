// Node.js app.  Launch at command line via "node app.js"

/*var less = require('less');

less.render('lessContents', function(e, css){
	console.log(css);
});*/

var http = require('http');

var port = 1337;


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Gurl\n');
}).listen(port);

