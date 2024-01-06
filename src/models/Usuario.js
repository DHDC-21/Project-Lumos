
const { DataTypes } = require('sequelize');
const database = require('../config/database');

const Usuario = database.define('Usuario',{
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    sobrenome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone:{
        type: DataTypes.STRING(12),
        allowNull: true,
    },
    foto:{
        type: DataTypes.BLOB,
        allowNull: true,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    eula:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});


module.exports = Usuario;