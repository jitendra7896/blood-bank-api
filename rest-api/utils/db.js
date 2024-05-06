const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://JitendraChatwani:TLSZIMQsopuBqdDt@jitendracluster.kqd4oy4.mongodb.net/Blood-donor"
      )
      .then(console.log("connected"));
  } catch (error) {
    console.error(error.message);
  }
};


module.exports = connectDB;