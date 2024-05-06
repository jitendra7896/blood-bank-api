const express = require("express");
const fs = require("fs");
const cors = require("cors");
const myApp = express();
myApp.use(express.urlencoded({extended : false}));
const connectDB = require("./utils/db");
const Donor = require("./models/donor");
//middleware
myApp.use(cors());
connectDB();
// myApp
//   .route("/api/users")
//   .get((req, res) => {
//     return res.json(users);
//   })
//   .post((req, res) => {
//     const body = req.body;

//     users.push({id : users.length + 1, ...body});
//     fs.writeFile("./users.json", JSON.stringify(users), (err,data) =>{
//         return res.json({id : users.length, ...body});
//     })
//   });

// myApp
//   .route("/api/user/:id")
//   .get((req, res) => {
//     let userID = Number(req.params.id);
//     let founduser = users.find((user) => user.id === userID);
//     return res.send(founduser);
//   })
//   .put((req, res) => {})
//   .delete((req, res) => {});
myApp.listen(8000, () => {
  console.log("Hello from server");
});
