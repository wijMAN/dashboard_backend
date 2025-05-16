const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const userModel = require("./models/users.js");

const app = express();
const port1 = process.env.PORT; // PORT variable from .env file

app.use(cors());
app.use(express.json());

// MODIFY THIS
// mongoose.connect(
//   "mongodb+srv://wijMAN:Wijdan_98@cluster0.14cxxql.mongodb.net/react_dashboard?retryWrites=true&w=majority"
// );

// 

// mongoose.connect(
//     "mongodb://127.0.0.1:27017/react_dashboard"
//   );

// mongodb://127.0.0.1:27017/react_dashboard
//mongodb+srv://wijMAN:Wijdan_98@cluster0.2zakiyf.mongodb.net/react_dashboard?retryWrites=true&w=majority
//mongodb+srv://wijMAN:Wijdan_98@cluster0.2zakiyf.mongodb.net/


//MODIFY THIS
// app.get("/getUsers", (req, res) => {
//   userModel
//     .find()
//     .then((users) => res.json(users))
//     .catch((err) => res.json(err));
// });  

app.get("/", (req, res) => {
  res.send("<h1>Ready to go</h1>")
});

app.listen(port1, () => {
  console.log(`server started at http://localhost:${port1}`);
});
