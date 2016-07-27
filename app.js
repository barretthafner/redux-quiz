var express  = require("express");
var app = express();
var bodyParser = require('body-parser');

var topScore = 0;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/build"));

app.get('/api/topScore', function(req, res) {

  setTimeout(() => {
    res.json({
      "topScore": topScore
    });
  }, 2000);

});

app.post('/api/topScore', function(req, res) {
  console.log('bammmmm!');
  console.log(req);
  topScore = req.body.topScore;
  res.json({
    "topScore": topScore
  });
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Server is running at: " + process.env.IP + ":" + process.env.PORT);
});
