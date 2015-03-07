// Node.js app.  Launch at command line via "node app4.js"
//similar to app3.  This one uses Jade view e3gine to get rid of magic html string

var http = require('http');
var express = require('express');
var port = 3000;
var app = express();
var ejsEngine = require('ejs-locals');

app.set("view engine", "jade");

app.get("/", function(req, res){
	//res.send("<html><body><h1>Express</h1></body></html>")
	res.render("jade/index", { title: "Express + Jade"});
});

app.get("/api/users", function(req, res){
  res.set("Content-Type", "application/json");
  res.send({ name: "Brian", isValid: true});
});

var server = http.createServer(app);

server.listen(port)