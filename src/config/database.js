
const { Sequelize } = require('sequelize');
require('dotenv').config();


const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
});


connection.authenticate()
    .then(()=>{
        connection.sync()
        console.log('Conecxão estabelecida com suecesso!');
    })
    .catch(error=>{
        console.error('Erro ao conectar no banco de dado: ', error);
    })

module.exports = connection;