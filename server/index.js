const express = require('express');
const route  = require('./Router/router');
const cors = require("cors");

const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/', route);

// app.listen(5050, ()=>{console.log("running at port 5050");})

module.exports = app;

