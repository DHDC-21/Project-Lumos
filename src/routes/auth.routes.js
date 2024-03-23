
const express = require('express');
const router = express.Router();

const global = require('../config/global');
const fileUpload = require('../middlewares/fileUpload')

const { telaDeLogin, autenticarLogin, removerCookie } = require('../controllers/sign-in');
const { telaDeCadastro, cadastrarNovoUsuario } = require('../controllers/sign-up');


router.get(global.ROUTE.SIGN_IN, telaDeLogin);
router.post(global.ROUTE.LOGIN, autenticarLogin);

router.get(global.ROUTE.SIGN_UP, telaDeCadastro);
router.post(global.ROUTE.SIGN_UP, fileUpload.single('inputFoto'), cadastrarNovoUsuario);

router.get(global.ROUTE.LOGOUT, removerCookie);

module.exports = router;