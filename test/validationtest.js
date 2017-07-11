var expect = require('chai').expect;

let Film = require('../app/models/film');

describe('Model Validation Tests', function() {
    it('should be invalid if title field is empty', function(done) {
        let film = new Film({
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
        });
        film.validate(function(err) {
            expect(err.errors.title).to.exist;
            done();
        });
    });
    it('should be invalid if writer field is empty', function(done) {
        let film = new Film({
          title: "Pulp Fiction",
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
        });
        film.validate(function(err) {
            expect(err.errors.writer).to.exist;
            done();
        });
    });
    it('should be invalid if director field is empty', function(done) {
        let film = new Film({
          title: "Pulp Fiction",
          writer: "Quentin Tarantino",
          starring: "John Travolta, Samual L. Jackson",
          genre: "crime",
          country: "USA",
          year: 1994,
          language: "English",
          runtime: 154,
          certificate: 18,
          synopsis: "Two hit men are on a mission to retrieve a stolen suitcase",
          poster: "Pulpfiction.jpeg"
        });
        film.validate(function(err) {
            expect(err.errors.director).to.exist;
            done();
        });
    });
    it('should be invalid if starring field is empty', function(done) {
        let film = new Film({
          title: "Pulp Fiction",
          writer: "Quentin Tarantino",
          director: "Quentin Tarantino",
          genre: "crime",
          country: "USA",
          year: 1994,
          language: "English",
          runtime: 154,
          certificate: 18,
          synopsis: "Two hit men are on a mission to retrieve a stolen suitcase",
          poster: "Pulpfiction.jpeg"
        });
        film.validate(function(err) {
            expect(err.errors.starring).to.exist;
            done();
        });
    });
    it('should be invalid if genre field is empty', function(done) {
        let film = new Film({
          title: "Pulp Fiction",
          writer: "Quentin Tarantino",
          director: "Quentin Tarantino",
          starring: "John Travolta, Samual L. Jackson",
          country: "USA",
          year: 1994,
          language: "English",
          runtime: 154,
          certificate: 18,
          synopsis: "Two hit men are on a mission to retrieve a stolen suitcase",
          poster: "Pulpfiction.jpeg"
        });
        film.validate(function(err) {
            expect(err.errors.genre).to.exist;
            done();
        });
    });
    it('should be invalid if country field is empty', function(done) {
        let film = new Film({
          title: "Pulp Fiction",
          writer: "Quentin Tarantino",
          director: "Quentin Tarantino",
          starring: "John Travolta, Samual L. Jackson",
          genre: "crime",
          year: 1994,
          language: "English",
          runtime: 154,
          certificate: 18,
          synopsis: "Two hit men are on a mission to retrieve a stolen suitcase",
          poster: "Pulpfiction.jpeg"
        });
        film.validate(function(err) {
            expect(err.errors.country).to.exist;
            done();
        });
    });
    it('should be invalid if year field is empty', function(done) {
        let film = new Film({
          title: "Pulp Fiction",
          writer: "Quentin Tarantino",
          director: "Quentin Tarantino",
          starring: "John Travolta, Samual L. Jackson",
          genre: "crime",
          country: "USA",
          language: "English",
          runtime: 154,
          certificate: 18,
          synopsis: "Two hit men are on a mission to retrieve a stolen suitcase",
          poster: "Pulpfiction.jpeg"
        });
        film.validate(function(err) {
            expect(err.errors.year).to.exist;
            done();
        });
    });
    it('should be invalid if language field is empty', function(done) {
        let film = new Film({
          title: "Pulp Fiction",
          writer: "Quentin Tarantino",
          director: "Quentin Tarantino",
          starring: "John Travolta, Samual L. Jackson",
          genre: "crime",
          country: "USA",
          year: 1994,
          runtime: 154,
          certificate: 18,
          synopsis: "Two hit men are on a mission to retrieve a stolen suitcase",
          poster: "Pulpfiction.jpeg"
        });
        film.validate(function(err) {
            expect(err.errors.language).to.exist;
            done();
        });
    });
    it('should be invalid if runtime field is empty', function(done) {
        let film = new Film({
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
        });
        film.validate(function(err) {
            expect(err.errors.runtime).to.exist;
            done();
        });
    });
    it('should be invalid if certificate field is empty', function(done) {
        let film = new Film({
          title: "Pulp Fiction",
          writer: "Quentin Tarantino",
          director: "Quentin Tarantino",
          starring: "John Travolta, Samual L. Jackson",
          genre: "crime",
          country: "USA",
          year: 1994,
          language: "English",
          runtime: 154,
          synopsis: "Two hit men are on a mission to retrieve a stolen suitcase",
          poster: "Pulpfiction.jpeg"
        });
        film.validate(function(err) {
            expect(err.errors.certificate).to.exist;
            done();
        });
    });
    it('should be invalid if synopsis field is empty', function(done) {
        let film = new Film({
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
          poster: "Pulpfiction.jpeg"
        });
        film.validate(function(err) {
            expect(err.errors.synopsis).to.exist;
            done();
        });
    });
    it('should be invalid if poster field is empty', function(done) {
        let film = new Film({
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
        });
        film.validate(function(err) {
            expect(err.errors.poster).to.exist;
            done();
        });
    });
});
