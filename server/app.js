
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path')
const http = require('http').Server(app);
const userRoute = require('./routes/user')
const taskRoute = require('./routes/task')
const authRoute = require('./routes/auth')
const cors = require('cors')
require("dotenv").config();
app.use(cors())

//DB Connection
const PORT = process.env.PORT || 3000; 
const CONNECTION_URI = process.env.URI;
const server = process.env.SERVER;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Enabeling post data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/user", userRoute)
app.use("/task", taskRoute)
app.use("/auth", authRoute)

mongoose.connect(CONNECTION_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(()=>console.log("Connected to db"))
.catch(err => console.log(err));

http.listen(PORT, ()=> console.log(`running on ${server}:${PORT}`));