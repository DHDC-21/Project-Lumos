
const global = require('../config/global');

const { Op } = require('sequelize');

const Usuario = require('../models/Usuario');
// const Amizade = require('../models/Amizade');

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

async function buscarAmigo(req,res){
    console.log("Rota buscarAmigo acionada!");
    
    try {
        const inputBusca = req.body.inputBusca;
    
        const usuarios = await Usuario.findAll({
            where:{
                [Op.or]:[{
                    nome:{
                        [Op.like]: '%' + inputBusca + '%',
                    }
                },{
                    sobrenome:{
                        [Op.like]: '%' + inputBusca + '%',
                    }
                }
            ]},
            attributes: ['id', 'nome', 'sobrenome', 'foto']
        })


        res.render(global.VIEW.BUSCAR_AMIGO,{
            global,
            usuarios
        });
        
    } catch (error) {
        console.error('Erro ao buscar usúarios: ', error);
        res.status(500).json({error:'Erro interno do servidor'});   
    }
}


module.exports = {
    telaEULA,
    telaHome,
    buscarAmigo,
}