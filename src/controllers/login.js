
const global = require('../config/global');


function telaDeLogin(req,res){
    res.render(global.VIEW.SIGN_IN,{
        title: global.ROUTE_TITLE.SIGN_IN,
        msg: '',
        global,
    });
}

async function autenticarLogin(req,res){
    // código para realizar o login
}


module.exports = {
    telaDeLogin,
    autenticarLogin
}