
const express = require('express');
const router = express.Router();

const global = require('../config/global');
const fileUpload = require('../middlewares/fileUpload')

const { telaDeLogin, autenticarLogin, removerCookie } = require('../controllers/sign-in');
const { telaDeCadastro, cadastrarNovoUsuario } = require('../controllers/sign-up');


router.get(global.ROUTE.LOGIN, telaDeLogin);
router.post(global.ROUTE.LOGIN, autenticarLogin);

router.get(global.ROUTE.REGISTER, telaDeCadastro);
router.post(global.ROUTE.REGISTER, fileUpload.single('inputFoto'), cadastrarNovoUsuario);

router.get(global.ROUTE.LOGOUT, removerCookie);

module.exports = router;