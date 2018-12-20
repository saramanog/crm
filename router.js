var express = require('express');
var dishesRouter = require('./controllers/dishes');
var usersRouter = require('./controllers/users');
var route = express.Router();

//Middleware to log all the request
route.all('*',function(req, res, next) {
    console.log("Incoming request: "+req.url);
    next();
  });

// Users route
route.use('/api/users', usersRouter);

//dishes route
route.use('/api/dishes', dishesRouter);
  
module.exports = route;