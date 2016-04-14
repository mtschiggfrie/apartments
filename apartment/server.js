//BASE SETUP
var Apartment = require('./app/models/Apartment')


//CALL THE PACKAGES
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');
var path = require('path');




mongoose.connect(config.database);

app.use(express.static(__dirname + '/public'));

//APP CONFIG

//use body parser to grab information from POST requests
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(bodyParser.json({limit: '10mb'}));

//configure app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Orgin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  next();
});

//log all requests to the console
app.use(morgan('dev'));




//REGISTER THE ROUTES
var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);



//CATCHALL ROUTES
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});



//START THE SERVER
app.listen(config.port);
console.log('server running on port ' + config.port);
