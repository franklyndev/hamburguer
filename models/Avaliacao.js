'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Avaliacao extends Model {
    static associate(models) {
      Avaliacao.belongsTo(models.Pedido, {
        foreignKey: 'pedido_id',
        as: 'pedido'
      });
    }
  }

  Avaliacao.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    pedido_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nota: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comentario: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Avaliacao',
    tableName: 'avaliacoes',
    timestamps: true
  });

  return Avaliacao;
};