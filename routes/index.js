var express = require('express');
var router = express.Router();
// var data = require('../data');
var indexController = require('../controllers/indexController');
var saveController = require('../controllers/saveController');
var itemController = require('../controllers/itemController');

/* GET home page. */
router.get('/', indexController);

// router.delete('/:delete', deleteController);
router.post('/item/:id', itemController);

router.post('/newquote', saveController);


// router.delete('/student/:id', function(req, res, next){
//     res.send(req.body);
//     console.log(req.body);
// });


module.exports = router;
