const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const donorsRouter = require("./routes/donors");

const myApp = express();
myApp.use(express.urlencoded({extended : false}));
const connectDB = require("./utils/db");
const Donor = require("./models/donor");
//middleware
myApp.use(cors());
myApp.use(bodyParser.json());
connectDB();

myApp.use('/blood-bank', donorsRouter);
myApp.listen(8000, () => {
  console.log("Hello from server");
});
