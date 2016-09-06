var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.text({ type: 'text/html' }))

app.use(cors({origin: "*"}));

var options = {
  root: __dirname + '/public/',
  dotfiles: 'deny',
  headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
  }
};

app.get('/', function (req, res) {

  res.sendFile("Nov2016_Tolley.html", options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', "Nov2016_Tolley.html");
    }
  });
});

app.post('/endpoint', function(req, res) {
    console.log(req.body)
    res.send("Updating with patch")
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
