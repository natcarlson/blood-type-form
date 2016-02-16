var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/client'));

app.set('views', __dirname + '/client/views')
app.set('view engine', 'ejs')

// var mongoPath = 'mongodb://localhost/bloodtype';
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/bloodtype');
var db = mongoose.connection;
db.once( 'open', function(callback) {
  console.log('database connected');
})



var indexRouter = require('./server/routes/index');
var bloodTypeRouter = require('./server/routes/api/bloodtype');

app.use('/', indexRouter);
app.use('/api/bloodtype', bloodTypeRouter);

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('this ship has sailed on port ' + port);
});
