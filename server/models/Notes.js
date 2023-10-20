const { Schema, model, Types } = require('mongoose');

const noteSchema = new Schema({
    note: {
      type: String,
    },
    title: {
      type: String,
    },

  });


const Note = model('Note', noteSchema);

module.exports = Note;