let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//book schema definition
let FilmSchema = new Schema(
  {
    title: { type: String, required: true },
    writer: { type: String, required: true },
    director: { type: String, required: true },
    starring: { type: String, required: true },
    genre: { type: String, required: true },
    country: { type: String, required: true },
    year: { type: Number, required: true },
    language: { type: String, required: true },
    runtime: { type: Number, required: true, min: 1 },
    certificate: { type: Number, required: true, min: 1 },
    synopsis: { type: String, required: true },
    poster: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  {
    versionKey: false
  }
);

// Sets the createdAt parameter equal to the current time
FilmSchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

//Exports the BookSchema for use elsewhere.
module.exports = mongoose.model('film', FilmSchema);
