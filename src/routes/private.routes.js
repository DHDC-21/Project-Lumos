
const express = require('express');
const router = express.Router();

const global = require('../config/global');

const { telaHome } = require('../controllers/viewControllers');


router.get(global.ROUTE.HOME, telaHome);


module.exports = router;