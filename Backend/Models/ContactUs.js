const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  messagedOn: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("contactUs", contactUsSchema);