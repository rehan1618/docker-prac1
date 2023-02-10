const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model('Task', schema);
