const { Schema, model, Types } = require('mongoose');

const noteSchema = new Schema({
    note: {
      type: String,
    },
    title: {
      type: String,
    },

  });


const Notes = model('Notes', noteSchema);

module.exports = User;