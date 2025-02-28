const express = require('express');
const route  = require('./Router/router');

const app = express();
app.use(express.json());

app.use('/', route);

app.listen(5050, ()=>{console.log("running at port 5050");})

