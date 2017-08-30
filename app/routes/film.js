let mongoose = require('mongoose');
let Film = require('../models/film');

// Use bluebird
mongoose.Promise = require('bluebird');

/*
 * GET /film route to retrieve all the films.
 */
function getFilms(req, res, next) {
    //Query the DB and if no errors, send all the films
    let query = Film.find({});
    query.exec((err, films) => {
        if(err) res.send(err);
        if(films.length == 0){
          res.status(204).json({ message: "Film not found"});
          return next();
        }
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
            res.status(400).send(err);
        }
        else { //If no errors, send it back to the client
            res.json({ message: 'Film successfully added!', film });
        }
    });
}

/*
 * GET /film/:id route to retrieve a film given its id.
 */
function getFilm(req, res, next) {
    Film.findById(req.params.id, (err, film) => {
        if(err) {
            res.status(400).send(err);
        }
        else if(film == null){
          res.status(404).json({ message: "Film not found"});
          return next();
        }
        //If no errors, send it back to the client
        else{
          res.json(film);
      }
    });
}

function getFilmByTitle(req, res, next) {
  //Query the DB and if no errors, send all the films
  let query = Film.find({title:req.params.title});
  query.exec((err, films) => {
    if(err) {
        res.status(400).send(err);
    }
    else if(films.length == 0){
      res.status(404).json({ message: "Film not found"});
      return next();
    }
      res.json(films);
  });
}

function getFilmByGenre(req, res, next) {
  //Query the DB and if no errors, send all the films
  let query = Film.find({genre:req.params.genre});
  query.exec((err, films) => {
    if(err) {
        res.status(400).send(err);
    }
    else if(films.length == 0){
      res.status(404).json({ message: "Film not found"});
      return next();
    }
      res.json(films);
  });
}

function getFilmByYear(req, res, next) {
  //Query the DB and if no errors, send all the films
  let query = Film.find({year:req.params.year});
  query.exec((err, films) => {
    if(err) {
        res.status(400).send(err);
    }
    else if(films.length == 0){
      res.status(404).json({ message: "Film not found"});
      return next();
    }
      res.json(films);
  });
}

function getFilmByCertificate(req, res, next) {
  //Query the DB and if no errors, send all the films
  let query = Film.find({certificate:req.params.certificate});
  query.exec((err, films) => {
    if(err) {
        res.status(400).send(err);
    }
    else if(films.length == 0){
      res.status(404).json({ message: "Film not found"});
      return next();
    }
      res.json(films);
  });
}

/*
 * DELETE /film/:id to delete a film given its id.
 */
function deleteFilm(req, res, next) {
  Film.findById({_id: req.params.id}, (err, film) => {
      if(err) {
          res.status(400).send(err);
      }
      else if(film == null){
        res.status(404).json({ message: "Film not found"});
        return next();
      }else{
      Film.remove({_id : req.params.id}, (err, result) => {
          res.json({ message: "Film successfully deleted!", result });
      });
    }
  });
}

/*
 * PUT /film/:id to updatea a film given its id
 */
function updateFilm(req, res, next) {
    Film.findById({_id: req.params.id}, (err, film) => {
      if(err) {
          res.status(400).send(err);
      }
      else if(film == null){
        res.status(404).json({ message: "Film not found"});
        return next();
      }
      //If no errors, send it back to the client
      else{
        Object.assign(film, req.body).save((err, film) => {
            if(err){
              res.status(400).send(err);
              return next();
            }
            res.json({ message: 'Film updated!', film });
        });
      }
    });
}

//export all the functions
module.exports = { getFilms, postFilm, getFilm, deleteFilm, updateFilm, getFilmByTitle, getFilmByGenre, getFilmByYear, getFilmByCertificate };
