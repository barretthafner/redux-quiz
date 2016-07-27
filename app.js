var express  = require("express");
var app = express();
var bodyParser = require('body-parser');

var topScore = 0;

var jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/build"));

app.get('/api/topScore', function(req, res) {

  setTimeout(() => {
    res.json({
      "topScore": topScore
    });
  }, 1000);

});

app.post('/api/topScore', jsonParser, function(req, res) {
  if (req.body.topScore > topScore) {
    topScore = req.body.topScore;
  }
  res.json({
      "topScore": topScore
  });
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Server is running at: " + process.env.IP + ":" + process.env.PORT);
});
