import Sequelize from 'sequelize';

const Model = Sequelize.Model;
class TransformerModel extends Model {
  static initializeSchema(database) {
    TransformerModel.init(
      {
        // attributes
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        allegiance: {
          type: Sequelize.STRING,
          allowNull: false
        },
        strength: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        intelligence: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        speed: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        endurance: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        rank: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        courage: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        firepower: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        skill: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize: database,
        modelName: 'transformer'
      }
    );
  }
}

export default TransformerModel;
