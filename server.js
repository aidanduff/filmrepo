let express = require('express');
var multer = require('multer');
let app = express();
let mongoose = require('mongoose');
let morgan = require('morgan');
const cors = require('cors');
let bodyParser = require('body-parser');
let port = 3000;
let film = require('./app/routes/film');
let config = require('config'); 
var path = require('path');


var DIR = './uploads/';
var upload = multer({dest: DIR});

app.use(cors());

app.use(multer({
  dest: DIR,
  rename: function (fieldname, filename) {
    return filename;
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }
}));

mongoose.Promise = require('bluebird');

let options = {
                server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
              };

mongoose.connect(config.DBHost, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//don't show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
    //use morgan to log at command line
    app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}

//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.use(express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, res) => res.json({message: "Welcome to our Filmstore!"}));

app.get('/uploads/:name', function (req, res, next) {

  var options = {
    root: __dirname + '/uploads/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });

});

app.post('/', function (req, res) {
     var path = '';
     upload(req, res, function (err) {
        if (err) {
          // An error occurred when uploading
          console.log(err);
        } else{ 
       // No error occured.
        res.send("Upload Completed"); 
     }
  });     
})

app.route("/movieApp/films")
    .get(film.getFilms)
    .post(film.postFilm);
app.route("/movieApp/films/:id")
    .get(film.getFilm)
    .delete(film.deleteFilm)
    .put(film.updateFilm);
app.route("/movieApp/films/title/:title")
      .get(film.getFilmByTitle);
app.route("/movieApp/films/genre/:genre")
      .get(film.getFilmByGenre);
app.route("/movieApp/films/year/:year")
      .get(film.getFilmByYear);
app.route("/movieApp/films/certificate/:certificate")
      .get(film.getFilmByCertificate);

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing