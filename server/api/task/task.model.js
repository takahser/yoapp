'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: String,
  info: String,
  estimation: Number,
  status: String,
  personResponsible: String,
  active: Boolean
});

module.exports = mongoose.model('Task', TaskSchema);