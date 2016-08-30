var express = require('express');

// Create our app
var app = express();
//get live port or 3000 if local
const PORT = process.env.PORT || 3000;

//convert https to http, as freeWeather doesn't send https
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});
