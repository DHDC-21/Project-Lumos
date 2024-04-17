

const global = require("../config/global");

const { Op } = require("sequelize");

const Usuario = require("../models/Usuario");
const Amizade = require("../models/Amizade");

module. exports = async function buscarUsuarios(req, res) {
  console.log("Rota buscarAmigo acionada!");
  try {
    const userId = req.userId;
    
    const inputBusca = req.body.inputBusca;

    const usuarios = await Usuario.findAll({
      where: {
        [Op.or]: [
          {
            nome: {
              [Op.like]: "%" + inputBusca + "%",
            },
          },
          {
            sobrenome: {
              [Op.like]: "%" + inputBusca + "%",
            },
          },
        ],
        id:{
          [Op.ne]: userId
        },
      },
      attributes: ["id", "nome", "sobrenome", "foto"],
    });

    // Renderizar o resultado da busca no modal
    res.render(global.VIEW.SEARCH_USER, {
      global,
      usuarios,
    });
  } catch (error) {
    console.error("Erro ao buscar usúarios: ", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
}