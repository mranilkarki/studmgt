var mongoose = require("mongoose");
var studentModel = new mongoose.Schema({
  name: { type: String, required: true },
  ParentsName: { type: String, required: true },
  Address: { type: String, required: true },
  contact: { type: String, required: true },
  isDeleted: { type: Boolean, default: false }
});

module.exports = mongoose.model("Students", studentModel);
