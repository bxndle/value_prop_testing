var bodyParser = require('body-parser');
var express = require('express');
var jwt = require('express-jwt');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'frontend'), { redirect: false }));

require('./backend/db.js');
var routesApi = require('./backend/routes.js');

app.use('/api', routesApi);

app.all('/*', function(req, res) {
    // Just send the index.html for other files to support HTML5Mode
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Origin', '*');
    res.sendFile('/frontend/index.html', { root: __dirname });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.send();
});

module.exports = app;

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})
