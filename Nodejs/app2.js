// Node.js app.  Launch at command line via "node app2.js"
//similar to app1.  This one uses http and express engine (web framework engine)

var http = require('http');
var express = require('express');
var port = 3000;
var app = express();

app.get("/", function(req, res){
	res.send("<html><body><h1>Express</h1></body></html>")
});

app.get("/api/users", function(req, res){
  res.set("Content-Type", "application/json");
  res.send({ name: "Brian", isValid: true});
});

var server = http.createServer(app);

server.listen(port)