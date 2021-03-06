var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/static'));
app.get('/', function(request, response) {
  var file = fs.readFileSync('./index.html','utf-8');
  response.send(file.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
