
const express = require('express');

const { telaDeCadastro, cadastrarNovoUsuario } = require('../controllers/cadastro');

const router = express.Router();

router.get('/', telaDeCadastro);
router.post('/', cadastrarNovoUsuario);


module.exports = router