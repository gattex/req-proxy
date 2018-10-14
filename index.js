var express = require('express');  
var request = require('request');
var cors = require('cors')

var app = express();  

app.use(cors())

app.use('/', function(req, res) {  
  var url = null;
  console.log(url);
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000);