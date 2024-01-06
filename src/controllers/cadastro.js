
const global = require('../config/global');
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
        repetirSenha,
        inputTelefone,
        inputFoto,
        inputStatus,
        eula,
    } = req.body;
    

    if(eula == 'false'){
        res.render(global.VIEW.SIGN_UP,{
            title: global.ROUTE_TITLE.SIGN_UP,
            msg: 'Você precisa aceitar as diretrizes da comunidade!',
            global,
        });
    }

    // inputSenha é diferente de repetirSenha
    if(inputSenha != repetirSenha){
        res.render(global.VIEW.SIGN_UP,{
            title: global.ROUTE_TITLE.SIGN_UP,
            msg: 'As senhas não são iguais!',
            global
        });
    }

    // O usuário existe?
    const novoUsuario = await Usuario.findAll({
        where:{
            email: inputEmail,
        }
    });
    if(novoUsuario){
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

        // Criando o novo usuário
        const novoUsuario = await Usuario.create({
            nome:       inputNome,
            sobrenome:  inputSobrenome,
            email:      inputEmail,
            senha:      senhaHash,
            telefone:   inputTelefone,
            foto:       inputFoto,
            status:     inputStatus,
            eula:       eula,
        });
        console.log({novoUsuario});
        res.redirect(global.ROUTE.SIGN_IN);
    } catch (error) {
        console.error('Erro ao salvar usuário: ', error);
    }
}


module.exports = {
    telaDeCadastro,
    cadastrarNovoUsuario
}