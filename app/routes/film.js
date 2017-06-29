let mongoose = require('mongoose');
let Film = require('../models/film');

// Use bluebird
mongoose.Promise = require('bluebird');

/*
 * GET /film route to retrieve all the films.
 */
function getFilms(req, res) {
    //Query the DB and if no errors, send all the films
    let query = Film.find({});
    query.exec((err, films) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(films);
    });
}

/*
 * POST /film to save a new film.
 */
function postFilm(req, res) {
    //Creates a new film
    var newFilm = new Film(req.body);
    //Save it into the DB.
    newFilm.save((err,film) => {
        if(err) {
            res.send(err);
        }
        else { //If no errors, send it back to the client
            res.json({message: "Film successfully added!", film });
        }
    });
}

/*
 * GET /film/:id route to retrieve a film given its id.
 */
function getFilm(req, res, next) {
    Film.findById(req.params.id, (err, film) => {
        if(err) res.send(err);
        if(film == null){
          res.json({ message: "Film not found"});
          return next();
        }
        //If no errors, send it back to the client
        res.json(film);
    });
}

/*
 * DELETE /film/:id to delete a film given its id.
 */
function deleteFilm(req, res) {
    Film.remove({_id : req.params.id}, (err, result) => {
        res.json({ message: "Film successfully deleted!", result });
    });
}

/*
 * PUT /film/:id to updatea a film given its id
 */
function updateFilm(req, res) {
    Film.findById({_id: req.params.id}, (err, film) => {
        if(err) res.send(err);
        Object.assign(film, req.body).save((err, film) => {
            if(err) res.send(err);
            res.json({ message: 'Film updated!', film });
        });
    });
}

//export all the functions
module.exports = { getFilms, postFilm, getFilm, deleteFilm, updateFilm };
