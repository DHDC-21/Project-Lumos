
const express = require('express');
const router = express.Router();

const global = require('../config/global.js');

const telaEULA = require('../controllers/eula.js');


router.get(global.ROUTE.EULA, telaEULA);


module.exports = router;