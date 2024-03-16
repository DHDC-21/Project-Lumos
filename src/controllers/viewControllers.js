
const global = require('../config/global');

const Usuario = require('../models/Usuario');

require('dotenv');

function telaEULA(req,res){
    res.render(global.VIEW.EULA,{
        title: global.ROUTE_TITLE.EULA,
    });
}

async function telaHome(req,res){
    const userId = req.userId
    try{
        const usuario = await Usuario.findByPk(
            userId, {
                attributes:{
                    exclude: ['senha']
                }
        });

        res.render(global.VIEW.HOME,{
            title: global.ROUTE_TITLE.HOME,
            global,
            usuario,
        });

    } catch{
        res.send("Erro na autenticação");
    }
}


module.exports = {
    telaEULA,
    telaHome,
}