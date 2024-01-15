
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv');

const global = require('../config/global');
const Usuario = require('../models/Usuario');


function telaDeLogin(req,res){
    res.render(global.VIEW.SIGN_IN,{
        title: global.ROUTE_TITLE.SIGN_IN,
        msg: '',
        global,
    });
}

async function autenticarLogin(req,res){
    const {
        inputEmail,
        inputSenha,
    } = req.body;

    let rememberMe = req.body;

    try {
        console.log('Bucando usuário no banco de dados')
        const usuario = await Usuario.findOne({
            where:{
                email: inputEmail,
            }
        });

        if(!usuario){
            res.render(global.VIEW.SIGN_IN,{
                title: global.ROUTE_TITLE.SIGN_IN,
                msg: 'Usuário e/ou senha incorretos!' + 'dev: usuário',
                global,
            });
        }
        
        
        console.log('Verificando senha')
        const checkPassword = await bcrypt.compare(inputSenha, usuario.senha);

        if(!checkPassword){
            res.render(global.VIEW.SIGN_IN,{
                title: global.ROUTE_TITLE.SIGN_IN,
                msg: 'Usuário e/ou senha incorretos!' + 'dev: senha',
                global,
            });
        }

        console.log('Verificando rememberMe')
        if(rememberMe !== '12h'){
            rememberMe = '1h';
        }
        
        console.log('Criando o cookie')
        res.cookie(global.COOKIE_NAME, jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: rememberMe } ));
        
        console.log('Redirecionando usuário')
        res.redirect(global.ROUTE.HOME);

    } catch (error) {
        res.render(global.VIEW.SIGN_IN,{
            title: global.ROUTE_TITLE.SIGN_IN,
            msg: 'Erro de autenticação!',
            global,
        });
        console.log(error);
    }

}


function removerCookie(req,res){
    res.clearCookie(global.COOKIE_NAME);
    res.redirect(global.ROUTE.SIGN_IN);
}


module.exports = {
    telaDeLogin,
    autenticarLogin,
    removerCookie,
}