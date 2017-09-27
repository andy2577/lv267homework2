var Eneida = require('../models/book');

module.exports = (req, res, next) => {
  
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