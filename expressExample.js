var express = require('express');
var Startup = require('./models/startup');
var app = express();

// This responds with "Hello World" on the homepage
/*app.get('/', function (req, res) {
  Startup.find({}, function(err, startups) {
    if(err)
    throw err;

   res.send(startups);
 });
})

// This responds a POST request for the homepage
app.get('/getCoinPip', function (req, res) {
  Startup.find({Name:"CoinPip"},function (err, startup) {
    if(err) throw err;
        res.send(startup);
  });
})
app.post('/process_get', function (req, res) {

   res.send('Hello POST');
})
// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {

   res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {

   res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {

   res.send('Page Pattern Match');
})*/
