var express = require('express');
var request = require('request');

var app = express();

// Serve our static folder containing front end resources.
app.use(express.static(__dirname + '/public'));

// Provide a route for the front end to query for guidebook public API
app.get('/search', function (req, res){
    var baseURL = 'http://guidebook.com/om/service/v2/search/?q=';
    var term = req.query.term;

    request(baseURL + term, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body); 
      }
    });
});

app.listen(process.env.PORT || 3000);