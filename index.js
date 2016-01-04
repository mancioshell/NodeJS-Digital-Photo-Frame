var http = require('http');

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/views'));
app.use(express.static(__dirname + '/public/views/partials'));
var server = http.createServer(app);

app.get('/', function (req, res) {
  res.sendfile('index.html');
});

server.listen(3000);