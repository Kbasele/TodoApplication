
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const http = require('http').Server(app);
const userRoute = require('./routes/user')
require("dotenv").config();

//DB Connection
const PORT = process.env.PORT || 3000; 
const CONNECTION_URI = process.env.URI;
const server = process.env.SERVER;

//Enabeling post data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/user", userRoute)


mongoose.connect(CONNECTION_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(()=>console.log("Connected to db"))
.catch(err => console.log(err));



http.listen(PORT, ()=> console.log(`running on ${server}:${PORT}`));