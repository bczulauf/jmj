var express = require("express"),
  app = express(),
  port = parseInt(process.env.PORT, 10) || 3000;

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

// app.get('/', function (req, res) {
// 	res.end('hi');
// })

app.listen(port);
console.log('Now serving the app at http://localhost:' + port + '/');