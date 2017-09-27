var express = require('express');
var router = express.Router();
// var data = require('../data');
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController);

router.get('/:student', indexController);

router.post('/student', function(req, res, next){
    res.send(req.body);
    console.log(req.body);
});

router.put('/student/:id', function(req, res, next){
    res.send(req.body);
    console.log(req.body);
});

router.delete('/student/:id', function(req, res, next){
    res.send(req.body);
    console.log(req.body);
});

module.exports = router;
