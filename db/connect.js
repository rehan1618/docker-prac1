const mongoose = require('mongoose');

module.exports.connectDB = async(uri) => {
  return await mongoose.connect(uri);
};
