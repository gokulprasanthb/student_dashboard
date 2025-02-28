const express = require('express');
const { joinLab, changeLab } = require('../Controller/controller');

const route = express.Router();

route.post('/joinLab', joinLab);
route.post('/changeLab', changeLab);

module.exports = route;