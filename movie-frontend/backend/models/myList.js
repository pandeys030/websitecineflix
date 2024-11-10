const mongoose = require('mongoose');

const myListSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true // To prevent duplicate titles
  }
});

module.exports = mongoose.model('MyList', myListSchema, 'myList');
