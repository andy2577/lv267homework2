var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');
var saveController = require('../controllers/saveController');
var itemController = require('../controllers/itemController');

/* GET home page. */
router.get('/', indexController);

router.post('/item/:id', itemController);

router.post('/newquote', saveController);



module.exports = router;
