var repository =  require('../repository/repository');
var express = require('express');

var route = express.Router();


 repository();

 route.get('/', function(req, res, next) {
     let users;
     repository.executeQuery("select * from Users")
               .then((resultSet) => 
               {
                    users = resultSet;
                    res.json(users);
               });
    });


module.exports = route;