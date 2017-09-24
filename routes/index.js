var express = require('express');
var https = require('https');
var router = express.Router();
// var data = require('../data');
var data = '';

let apireq = (req, res) => {
  const options = {
    hostname: 'lv267homework2-api.herokuapp.com',
    port: 443,
    path: '/',
    method: 'GET'
  };

  const ajxreq = https.request(options, (ajxres) => {
    // console.log('statusCode:', ajxres.statusCode);
    // console.log('headers:', ajxres.headers);

    ajxres.on('data', (d) => {
      // process.stdout.write(d);
      data = JSON.parse(d);
      // console.log(req.params.student);
      res.render('index', {
        title: 'ЕнеЇда',
        quotes: data,
        show: req.params.student
      });

    });
  });

  ajxreq.on('error', (e) => {
    console.error(e);
  });

  ajxreq.end();
}

/* GET home page. */
router.get('/', function (req, res, next) {
  apireq(req, res);
});

router.get('/:student', function (req, res, next) {
  apireq(req, res);
});

module.exports = router;
