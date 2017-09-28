var express = require('express');
var router = express.Router();
// var data = require('../data');
var indexController = require('../controllers/indexController');
var saveController = require('../controllers/saveController');
var deleteController = require('../controllers/deleteController');

/* GET home page. */
router.get('/', indexController);

// router.delete('/:delete', deleteController);
router.post('/delete/:delete', deleteController);

router.post('/newquote', saveController);

// router.get('/student/:id', function(req, res, next){
//     res.send(req.params.id);
//     console.log(req.params.id);
// });

// router.delete('/student/:id', function(req, res, next){
//     res.send(req.body);
//     console.log(req.body);
// });


module.exports = router;
