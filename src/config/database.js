
const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.BD_USER,
    process.env.DB_PASSWORD,{
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
});


async function conectarAoBancoDeDados(){
    try {
        await sequelize.authenticate();
        console.log('Conecxão estabelecida com suecesso!');
    } catch (error) {
        console.error('Erro ao conectar no banco de dado: ', error);
    }
}

conectarAoBancoDeDados();


module.exports = sequelize;