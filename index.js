const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/users.js");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://wijMAN:Wijdan_98@cluster0.14cxxql.mongodb.net/react_dashboard?retryWrites=true&w=majority"
);

// 

// mongoose.connect(
//     "mongodb://127.0.0.1:27017/react_dashboard"
//   );

// mongodb://127.0.0.1:27017/react_dashboard
//mongodb+srv://wijMAN:Wijdan_98@cluster0.2zakiyf.mongodb.net/react_dashboard?retryWrites=true&w=majority
//mongodb+srv://wijMAN:Wijdan_98@cluster0.2zakiyf.mongodb.net/

app.get("/getUsers", (req, res) => {
  userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  res.send("<h1>Ready to go</h1>")
});

app.listen(3001, () => {
  console.log("server started at http://localhost:3001");
});
