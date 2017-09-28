var Eneida = require('../models/book');

module.exports = (req, res, next) => {
    // console.log("this is parametter  " + req.params.delete);
    // Create an instance of model Eneida
    // let new_quote = new Eneida({ student: req.body.student, quote: req.body.quote });

    // Delete model instance from DB
    Eneida.findByIdAndRemove( req.params.delete ,function (err, ignore_res) {
        if (err) return handleError(err);
        // saved!
        // console.log(res);

        Eneida.find((err, dbres) => {

            if (err) return err;

            var options = {
                quotes: dbres,
                show: false,//hack for testing TODO proper flag id
                title: 'ЕнеЇда'
            }
            res.render('index', options);
        });
    });
}