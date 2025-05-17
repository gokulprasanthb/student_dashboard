const express = require('express');
const { joinLab, changeLab, labChangeRequests, labJoinRequests} = require('../Controller/controller');

const route = express.Router();

route.post('/joinLab', joinLab);
route.post('/changeLab', changeLab);
route.get('/labChangeRequests', labChangeRequests);
route.get('/labJoinRequests', labJoinRequests);


module.exports = route;