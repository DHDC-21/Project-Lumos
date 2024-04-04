
const global = require('../config/global');

const { Op } = require('sequelize');

const Usuario = require('../models/Usuario');
const Amizade = require('../models/Amizade');


module.exports = async function telaHome(req,res){
    const userId = req.userId
    try{
        const usuario = await Usuario.findByPk(
            userId, {
                attributes:{
                    exclude: ['senha']
                }
        });

        res.render(global.VIEW.HOME,{
            title: global.TITLE.HOME,
            global,
            usuario,
        });

    } catch{
        res.send("Não foi possível exibir a tela inicial");
    }
}
   