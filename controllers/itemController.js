var Eneida = require('../models/book');

module.exports = (req, res, next) => {

    if (req.body.button == 'delete') {
        // Delete model instance from DB
        Eneida.findByIdAndRemove(req.params.id, function (err, ignore_res) {
            if (err) return handleError(err);
            console.log('deleted');
            //render page
            Eneida.find((err, dbres) => {
                if (err) return err;
                var options = {
                    quotes: dbres,
                    show: false,
                    title: 'ЕнеЇда'
                }
                res.render('index', options);
            });
        });
    } else if (req.body.button == 'save') {
        // Update an instance of model Eneida
        Eneida.findByIdAndUpdate(req.params.id, { 'quote': req.body.quote }, function (err, ignore_res) {
            if (err) return handleError(err);

            //render page
            Eneida.find((err, dbres) => {
                if (err) return err;
                var options = {
                    quotes: dbres,
                    show: false,
                    title: 'ЕнеЇда'
                }
                res.render('index', options);
            });
        })
    }
}