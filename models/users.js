const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  end_year: String,
  intensity: String,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: String,
  pestle: String,
  source: String,
  title: String,
  likelihood: String,
});

const userModel = mongoose.model("dashboard_data", userSchema);
// const userModel = mongoose.model("data_collection_1", userSchema);
module.exports = userModel;
