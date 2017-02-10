var express = require('express');
var app = express();

app.use( ( req, res, next ) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
} );

app.get('/', function (req, res) {
  res.send(['sfasfdfa', 'sfasdsdfa', 'sdfasdfasdf']);
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
