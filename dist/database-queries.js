"use strict";

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _transformerModel = _interopRequireDefault(require("./models/transformer-model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DatabaseOperations {
  static async getAutobots() {
    return _transformerModel.default.findAll({
      where: {
        allegiance: 'Autobot'
      }
    });
  }

  static async getDecepticons() {
    return _transformerModel.default.findAll({
      where: {
        allegiance: 'Decepticon'
      }
    });
  }

  static getDecepticons() {}

  static getById(id) {}

  static updateTransformer(transformer) {
    Transformer.update({
      allegiance: transformer.allegiance,
      name: transformer.name,
      strength: transformer.strength,
      intelligence: transformer.intelligence,
      speed: transformer.speed,
      endurance: transformer.endurance,
      rank: transformer.rank,
      courage: transformer.courage,
      firepower: transformer.firepower,
      skill: transformer.skill
    }, {
      where: {
        id: transformer.id
      }
    }).then(() => {
      console.log("Saved transformer: ".concat(transformer));
    });
  }

}

exports.default = DatabaseOperations;