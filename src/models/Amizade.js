
const { DataTypes } = require('sequelize');
const database = require('../config/database');

const Usuario = require('./Usuario');

const Amizade = database.define('Amizade', {
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

Usuario.belongsToMany(Usuario,{
    through: Amizade,
    as: 'Amigos'
});


module.exports = Amizade;