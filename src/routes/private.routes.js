
const express = require('express');
const router = express.Router();

const global = require('../config/global');

const { telaHome, buscarAmigo } = require('../controllers/viewControllers');


router.get(global.ROUTE.HOME, telaHome);
;
router.post(global.ROUTE.BUSCAR_AMIGO, buscarAmigo);


module.exports = router;