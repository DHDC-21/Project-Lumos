
const global = require("../config/global");

const { Op } = require("sequelize");

const Usuario = require("../models/Usuario");
const Amizade = require("../models/Amizade");

module.exports = async function addFriend(req, res) {
  const { amigoId } = req.body;
  const userId = req.userId;

  console.log("Rota de socicitação de amizade acionada!");

  // Passo 1: Verificar sé userId é amigoId são amigos.
  // ((UsuarioId == userId && AmigoId == amigoId) || (UsuarioId = amigoId && AmigoId == userId)) && (staus == 'pendente' || status == 'aceito')
  
  const amigos = await Amizade.findAll({
    where: {
      [Op.or]:[
        {[Op.and]:[
          { UsuarioId: userId },
          { AmigoId: amigoId },
        ]},
        {[Op.and]:[
          { UsuarioId: amigoId },
          { AmigoId: userId },
        ]},
    ]}
  });

  console.log(amigos);
  console.log(amigos.status);

  // Passo 2.1: Se amigos então não faça nada
  // Passo 2.2: Caso contrário, enviar pedido de amizade

  if(amigos == 'pendente'){
    console.log('Pedido de amizade pendente')

  } else if (amigos.status == 'amigos'){
    console.log('Os usúarios ja são amigos!')

  } else if (amigos.status == 'bloqueado'){
    console.log('Usúario bloqueado')

  } 

  if(!amigos){
    console.log("Usuarios não amigos")
    await Amizade.create({
      UsuarioId: userId,
      AmigoId: amigoId,
      status: "pendente",
    });

    console.log('Pedido de amizade enviado!');
  }

}