
const global = require("../config/global");

const { Op } = require("sequelize");

const Usuario = require("../models/Usuario");
const Amizade = require("../models/Amizade");

module.exports = async function addFriend(req, res) {
  const { amigoId } = req.body;
  const userId = req.userId;

  console.log("Rota de socicitação de amizade acionada!");
  Amizade.create({
    UsuarioId: userId,
    AmigoId: amigoId,
    status: "pendente",
  });
}