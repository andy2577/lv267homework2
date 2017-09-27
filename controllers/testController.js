var Eneida = require('../models/book');

module.exports = (req, res, next) => {
  
        // res.render('index', {
        //   title: 'ЕнеЇда',
        //   quotes: data,
        //   show: req.params.student
        // });

        // res.send(req);
  
        Eneida.find((err, dbres) =>{

            if(err) return err;

            var options = {
                quotes: dbres,
                show: false,//hack for testing TODO proper flag id
                title: 'ЕнеЇда'
            }
            res.render('index', options);
        });
  }