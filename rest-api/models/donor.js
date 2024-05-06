const mongoose = require("mongoose");

// Define a schema for the series collection
const donorSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  address: String,
  city: String,
  state: String,
  mobile: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
},{timestamps: true});

// Create a model for the series collection using the schema
module.exports = mongoose.model("donor", donorSchema);
