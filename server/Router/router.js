const express = require('express');
const { getSpecialLabList, getEventList} = require('../Controller/controller');

const route = express.Router();

route.get('/SpecialLabList/:id', getSpecialLabList);
route.get('/EventList/:id', getEventList);

module.exports = route;