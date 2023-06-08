const mongoose = require("mongoose");
const { Schema } = require("mongoose");
module.exports.userModel = mongoose.model('users', new Schema({
  userName: String,
  password: String,
  data: [String]
}))

module.exports.sessionModel = mongoose.model('sessionModal', new Schema({
  sessionId: String,
  userName: String,
  data: [String]
}))

