const express = require('express');
const { getSpecialLabList, getEventList, getStudentList} = require('../Controller/controller');

const route = express.Router();

route.get('/SpecialLabList/:id', getSpecialLabList);
route.get('/EventList/:id', getEventList);
route.get('/StudentList/:id', getStudentList);

module.exports = route;