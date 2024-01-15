
const express = require('express');
const router = express.Router();

const global = require('../config/global');

const { telaEULA } = require('../controllers/viewControllers');

router.get(global.ROUTE.EULA, telaEULA);


module.exports = router;