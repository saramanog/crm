var express = require('express');
var dishesData = require('../mockData/dishes');


var router = express.Router();


router.get('/', function (req, res, next) {
    res.json(dishesData);
});

router.get('/category/:categoryId', function(req, res, next) {
    let id = req.params.categoryId;
    res.json(dishesData.categories.find(a=> a.categoryID == id));
});



module.exports = router;

