var Eneida = require('../models/book');

module.exports = (req, res, next) => {
        Eneida.find((err, dbres) =>{
            if(err) return err;
            var options = {
                quotes: dbres,
                show: false,
                title: 'ЕнеЇда'
            }
            res.render('index', options);
        });
  }
