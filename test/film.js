//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Film = require('../app/models/film');
let pulpFiction = {
    title: "Pulp Fiction",
    writer: "Quentin Tarantino",
    director: "Quentin Tarantino",
    starring: "John Travolta, Samual L. Jackson",
    genre: "crime",
    country: "USA",
    year: 1994,
    language: "English",
    runtime: 154,
    certificate: 18,
    synopsis: "Two hit men are on a mission to retrieve a stolen suitcase",
    poster: "Pulpfiction.jpeg"
}

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

// Use bluebird
mongoose.Promise = require('bluebird');

chai.use(chaiHttp);
//Our parent block
describe('Integration Tests', () => {
    beforeEach((done) => { //Before each test we empty the database
        Film.remove({}, (err) => {
           done();
        });
    });
/*
  * Test the /GET route
  */
  describe('/GET film', () => {
      it('it should GET all the films', (done) => {
        chai.request(server)
            .post('/movieApp/films')
            .send(pulpFiction)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Film successfully added!');
                res.body.film.should.have.property('title');
                res.body.film.should.have.property('writer');
                res.body.film.should.have.property('director');
                res.body.film.should.have.property('starring');
                res.body.film.should.have.property('genre');
                res.body.film.should.have.property('country');
                res.body.film.should.have.property('year');
                res.body.film.should.have.property('language');
                res.body.film.should.have.property('runtime');
                res.body.film.should.have.property('certificate');
                res.body.film.should.have.property('synopsis');
                res.body.film.should.have.property('poster');
              //done();
            });
        chai.request(server)
            .get('/movieApp/films')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
              done();
            });
      });
  });

  /*
  * Test the /POST route
  */
  describe('/POST film', () => {
      it('it should not POST a film without runtime field', (done) => {
        let film = {
          title: "Pulp Fiction",
          writer: "Quentin Tarantino",
          director: "Quentin Tarantino",
          starring: "John Travolta, Samual L. Jackson",
          genre: "crime",
          country: "USA",
          year: 1994,
          language: "English",
          certificate: 18,
          synopsis: "Two hit men are on a mission to retrieve a stolen suitcase",
          poster: "Pulpfiction.jpeg"
        }
        chai.request(server)
            .post('/movieApp/films')
            .send(film)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('runtime');
                res.body.errors.runtime.should.have.property('kind').eql('required');
              done();
            });
      });
      it('it should POST a film ', (done) => {
        chai.request(server)
            .post('/movieApp/films')
            .send(pulpFiction)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Film successfully added!');
                res.body.film.should.have.property('title');
                res.body.film.should.have.property('writer');
                res.body.film.should.have.property('director');
                res.body.film.should.have.property('starring');
                res.body.film.should.have.property('genre');
                res.body.film.should.have.property('country');
                res.body.film.should.have.property('year');
                res.body.film.should.have.property('language');
                res.body.film.should.have.property('runtime');
                res.body.film.should.have.property('certificate');
                res.body.film.should.have.property('synopsis');
                res.body.film.should.have.property('poster');
              done();
            });
      });
  });
  /*
    * Test the /GET/:id route
    */
    describe('/GET/:id film', () => {
        it('it should GET a film by the given id', (done) => {
          let film = new Film(pulpFiction);
          film.save((err, pulpFiction) => {
              chai.request(server)
              .get('/movieApp/films/' + film.id)
              .send(pulpFiction)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('title');
                  res.body.should.have.property('writer');
                  res.body.should.have.property('director');
                  res.body.should.have.property('starring');
                  res.body.should.have.property('genre');
                  res.body.should.have.property('country');
                  res.body.should.have.property('year');
                  res.body.should.have.property('language');
                  res.body.should.have.property('runtime');
                  res.body.should.have.property('certificate');
                  res.body.should.have.property('synopsis');
                  res.body.should.have.property('poster');
                  res.body.should.have.property('_id').eql(film.id);
                done();
              });
          });

        });
    });

    describe('/GET/title/:title film', () => {
        it('it should GET a film by the given title', (done) => {
          let film = new Film(pulpFiction);
          film.save((err, film) => {
              chai.request(server)
              .get('/movieApp/films/title/' + film.title)
              .send(film)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body[0].should.have.property('title').eql(film.title);
                  res.body[0].should.have.property('writer');
                  res.body[0].should.have.property('director');
                  res.body[0].should.have.property('starring');
                  res.body[0].should.have.property('genre');
                  res.body[0].should.have.property('country');
                  res.body[0].should.have.property('year');
                  res.body[0].should.have.property('language');
                  res.body[0].should.have.property('runtime');
                  res.body[0].should.have.property('certificate');
                  res.body[0].should.have.property('synopsis');
                  res.body[0].should.have.property('poster');
                  res.body[0].should.have.property('_id');
                done();
              });
          });

        });
    });

    describe('/GET/genre/:genre film', () => {
        it('it should GET a film by the given genre', (done) => {
          let film = new Film(pulpFiction);
          film.save((err, film) => {
              chai.request(server)
              .get('/movieApp/films/genre/' + film.genre)
              .send(film)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body[0].should.have.property('title');
                  res.body[0].should.have.property('writer');
                  res.body[0].should.have.property('director');
                  res.body[0].should.have.property('starring');
                  res.body[0].should.have.property('genre').eql(film.genre);
                  res.body[0].should.have.property('country');
                  res.body[0].should.have.property('year');
                  res.body[0].should.have.property('language');
                  res.body[0].should.have.property('runtime');
                  res.body[0].should.have.property('certificate');
                  res.body[0].should.have.property('synopsis');
                  res.body[0].should.have.property('poster');
                  res.body[0].should.have.property('_id');
                done();
              });
          });

        });
    });

    describe('/GET/year/:year film', () => {
        it('it should GET a film by the given year', (done) => {
          let film = new Film(pulpFiction);
          film.save((err, film) => {
              chai.request(server)
              .get('/movieApp/films/year/' + film.year)
              .send(film)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body[0].should.have.property('title');
                  res.body[0].should.have.property('writer');
                  res.body[0].should.have.property('director');
                  res.body[0].should.have.property('starring');
                  res.body[0].should.have.property('genre');
                  res.body[0].should.have.property('country');
                  res.body[0].should.have.property('year').eql(film.year);
                  res.body[0].should.have.property('language');
                  res.body[0].should.have.property('runtime');
                  res.body[0].should.have.property('certificate');
                  res.body[0].should.have.property('synopsis');
                  res.body[0].should.have.property('poster');
                  res.body[0].should.have.property('_id');
                done();
              });
          });

        });
    });

    describe('/GET/certificate/:certificate film', () => {
        it('it should GET a film by the given certificate', (done) => {
          let film = new Film(pulpFiction);
          film.save((err, film) => {
              chai.request(server)
              .get('/movieApp/films/certificate/' + film.certificate)
              .send(film)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body[0].should.have.property('title');
                  res.body[0].should.have.property('writer');
                  res.body[0].should.have.property('director');
                  res.body[0].should.have.property('starring');
                  res.body[0].should.have.property('genre');
                  res.body[0].should.have.property('country');
                  res.body[0].should.have.property('year');
                  res.body[0].should.have.property('language');
                  res.body[0].should.have.property('runtime');
                  res.body[0].should.have.property('certificate').eql(film.certificate);
                  res.body[0].should.have.property('synopsis');
                  res.body[0].should.have.property('poster');
                  res.body[0].should.have.property('_id');
                done();
              });
          });

        });
    });
    /*
 * Test the /PUT/:id route
 */
 describe('/PUT/:id film', () => {
     it('it should UPDATE a film given the id', (done) => {
       let film = new Film(pulpFiction);
       film.save((err, film) => {
               chai.request(server)
               .put('/movieApp/films/' + film.id)
               .send({
                 title: "The Godfather",
                 writer: "Mario Puzo",
                 director: "Francis Ford Copolla",
                 starring: "Al Pacino, Marlon Brando",
                 genre: "crime",
                 country: "USA",
                 year: 1972,
                 language: "English",
                 runtime: 120,
                 certificate: 18,
                 synopsis: "Organised crime in 1960s New York",
                 poster: "Goldfather.jpeg"
               }
             )
               .end((err, res) => {
                   res.should.have.status(200);
                   res.body.should.be.a('object');
                   res.body.should.have.property('message').eql('Film updated!');
                   res.body.film.should.have.property('year').eql(1972);
                 done();
               });
         });
     });
 });
 /*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id film', () => {
      it('it should DELETE a film given the id', (done) => {
        let film = new Film(pulpFiction);
        film.save((err, film) => {
                chai.request(server)
                .delete('/movieApp/films/' + film.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Film successfully deleted!');
                    res.body.result.should.have.property('ok').eql(1);
                    res.body.result.should.have.property('n').eql(1);
                  done();
                });
          });
      });
  });
});
