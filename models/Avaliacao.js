import { Model, DataTypes } from 'sequelize';

class Avaliacao extends Model {
  static associate(models) {
    Avaliacao.belongsTo(models.Pedido, {
      foreignKey: 'pedido_id',
      as: 'pedido'
    });
  }
}

export default (sequelize) => {
  Avaliacao.init(
    {
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
    },
    {
      sequelize,
      modelName: 'Avaliacao',
      tableName: 'avaliacoes',
      timestamps: true
    }
  );

  return Avaliacao;
};