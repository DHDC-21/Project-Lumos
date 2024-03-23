
const global = require('../config/global.js');
const bcrypt = require('bcrypt');

const Usuario = require('../models/Usuario.js');


function telaDeCadastro(req,res){
    res.render(global.VIEW.SIGN_UP,{
        title: global.ROUTE_TITLE.SIGN_UP,
        msg: '',
        global,
    });
}

async function cadastrarNovoUsuario(req,res){
    const {
        inputNome,
        inputSobrenome,
        inputEmail,
        inputSenha,
        inputRepetirSenha,
        inputTelefone,
        // inputFoto,
        inputStatus,
        inputEULA,
    } = req.body;
    
    // O usuário aceitou as diretrizes da comunidade
    if(inputEULA != 1){
        res.render(global.VIEW.SIGN_UP,{
            title: global.ROUTE_TITLE.SIGN_UP,
            msg: 'Você precisa aceitar as diretrizes da comunidade!',
            global,
        });
    }

    // inputSenha é diferente de inputRepetirSenha
    if(inputSenha != inputRepetirSenha){
        res.render(global.VIEW.SIGN_UP,{
            title: global.ROUTE_TITLE.SIGN_UP,
            msg: 'As senhas não são iguais!',
            global
        });
    }

    // O usuário existe?
    const emailJaCadastrado = await Usuario.findOne({
        where:{
            email: inputEmail,
        }
    });
    if(emailJaCadastrado){
        res.render(global.VIEW.SIGN_UP,{
            title: global.ROUTE_TITLE.SIGN_UP + ' (ERRO!)',
            msg: 'E-mail já cadastrado!',
            global,
        })
    }

    try {
        // Criptografando a senha
        const salt = await bcrypt.genSalt(12);
        const senhaHash = await bcrypt.hash(inputSenha, salt);

        const filePath = req.file.path;

        // Criando o novo usuário
        const novoUsuario = await Usuario.create({
            nome:       inputNome,
            sobrenome:  inputSobrenome,
            email:      inputEmail,
            senha:      senhaHash,
            telefone:   inputTelefone,
            foto:       filePath,
            status:     inputStatus,
            eula:       inputEULA,
        });
        console.log({novoUsuario});
        res.redirect(global.ROUTE.SIGN_IN);
    } catch (error) {
        console.error('Erro ao salvar usuário: ', error);
    }

    global.ROUTE.AUTH.TESTE
}


module.exports = {
    telaDeCadastro,
    cadastrarNovoUsuario
}