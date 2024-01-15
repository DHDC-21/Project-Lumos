
const express = require('express');
const router = express.Router();

const global = require('../config/global');

const { telaDeLogin, autenticarLogin, removerCookie } = require('../controllers/sign-in');
const { telaDeCadastro, cadastrarNovoUsuario } = require('../controllers/sign-up');



router.get(global.ROUTE.SIGN_IN, telaDeLogin);
router.post(global.ROUTE.LOGIN, autenticarLogin);

router.get(global.ROUTE.SIGN_UP, telaDeCadastro);
router.post(global.ROUTE.SIGN_UP, cadastrarNovoUsuario);

router.get(global.ROUTE.LOGOUT, removerCookie);

module.exports = router;