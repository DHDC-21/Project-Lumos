
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv');

const global = require('../config/global');
const Usuario = require('../models/Usuario');


function telaDeLogin(req,res){
    res.render(global.VIEW.LOGIN,{
        title: global.TITLE.LOGIN,
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
            res.render(global.VIEW.LOGIN,{
                title: global.TITLE.LOGIN,
                msg: 'Usuário e/ou senha incorretos!' + ' dev: usuário errado',
                global,
            });
        }
        
        
        console.log('Verificando senha')
        const checkPassword = await bcrypt.compare(inputSenha, usuario.senha);

        if(!checkPassword){
            res.render(global.VIEW.LOGIN,{
                title: global.TITLE.LOGIN,
                msg: 'Usuário e/ou senha incorretos!' + ' dev: senha errada',
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
        res.render(global.VIEW.LOGIN,{
            title: global.TITLE.LOGIN,
            msg: 'Erro de autenticação!',
            global,
        });
        console.log(error);
    }

}


function removerCookie(req,res){
    res.clearCookie(global.COOKIE_NAME);
    res.redirect(global.ROUTE.LOGIN);
}


module.exports = {
    telaDeLogin,
    autenticarLogin,
    removerCookie,
}