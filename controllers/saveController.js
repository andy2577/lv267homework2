var Eneida = require('../models/book');

module.exports = (req, res, next) => {
    // Create an instance of model Eneida
    let new_quote = new Eneida({ student: req.body.student, quote: req.body.quote });

    // Save the new model instance, passing a callback
    new_quote.save(function (err) {
        if (err) return handleError(err);
        // saved!
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