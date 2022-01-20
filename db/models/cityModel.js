const mongoose = require("mongoose");

const cityModel = new mongoose.Schema({
  name: { type: String },
  desc: { type: String },
  url: { type: String },
});

module.exports = mongoose.model("cityModel", cityModel);
