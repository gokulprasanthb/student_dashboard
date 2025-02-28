const express = require('express');
const { getSpecialLabList} = require('../Controller/controller');

const route = express.Router();

route.get('/SpecialLabList/:id', getSpecialLabList);

module.exports = route;