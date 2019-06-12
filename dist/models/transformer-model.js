"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Model = _sequelize.default.Model;

class TransformerModel extends Model {
  static initializeSchema(database) {
    TransformerModel.init({
      // attributes
      name: {
        type: _sequelize.default.STRING,
        allowNull: false
      },
      allegiance: {
        type: _sequelize.default.STRING,
        allowNull: false
      },
      strength: {
        type: _sequelize.default.INTEGER,
        allowNull: false
      },
      intelligence: {
        type: _sequelize.default.INTEGER,
        allowNull: false
      },
      speed: {
        type: _sequelize.default.INTEGER,
        allowNull: false
      },
      endurance: {
        type: _sequelize.default.INTEGER,
        allowNull: false
      },
      rank: {
        type: _sequelize.default.INTEGER,
        allowNull: false
      },
      courage: {
        type: _sequelize.default.INTEGER,
        allowNull: false
      },
      firepower: {
        type: _sequelize.default.INTEGER,
        allowNull: false
      },
      skill: {
        type: _sequelize.default.INTEGER,
        allowNull: false
      }
    }, {
      sequelize: database,
      modelName: 'transformer'
    });
  }

}

var _default = TransformerModel;
exports.default = _default;