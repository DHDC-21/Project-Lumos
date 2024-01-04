

const express = require('express');

const { telaDeLogin, autenticarLogin } = require('../controllers/login');

const router = express.Router();


router.get('/', telaDeLogin);
router.post('/', autenticarLogin);


module.exports = router;