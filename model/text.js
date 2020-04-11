var mongoose = require('mongoose');

var textSchema = mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  msg: {   type: String }
});

module.exports = mongoose.model('text', textSchema, 'text');
