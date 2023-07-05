const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const usuario = db.define('usuario', {
    nome: {
        type: DataTypes.STRING(30),
    },
    idade: {
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING(30)
    },
},{

createdAt: false,
updatedAt: false
})

Produto.sync

module.exports = usuario