const express = require('express');
const { joinLab, changeLab, requestDetails } = require('../Controller/controller');

const route = express.Router();

route.post('/joinLab', joinLab);
route.post('/changeLab', changeLab);
route.get('/requests', requestDetails)
module.exports = route;