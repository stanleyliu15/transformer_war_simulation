"use strict";

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _transformerModel = _interopRequireDefault(require("./models/transformer-model"));

var _war = _interopRequireDefault(require("./war"));

var _transformerValidator = _interopRequireDefault(require("./validations/transformer-validator"));

var _allegiances = require("./constants/allegiances");

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Op = _sequelize.default.Op;

class ServerOperations {
  static async findAll(req, res) {
    const transformers = req.query.name ? await _transformerModel.default.findAll({
      where: {
        name: {
          [Op.like]: "%".concat(req.query.name, "%")
        }
      }
    }) : await _transformerModel.default.findAll();
    res.send(transformers);
  }

  static async getAutobots(req, res) {
    const transformers = await _transformerModel.default.findAll({
      where: {
        allegiance: _allegiances.Allegiances.Autobot
      }
    });
    res.send(transformers);
  }

  static async getDecepticons(req, res) {
    const transformers = await _transformerModel.default.findAll({
      where: {
        allegiance: _allegiances.Allegiances.Decepticon
      }
    });
    res.send(transformers);
  }

  static async getById(req, res) {
    const id = req.params.id;

    if (!id) {
      res.status(400).send('Missing a proper ID parameter (which should be numeric)');
      return;
    }

    const transformer = await _transformerModel.default.findByPk(id);

    if (!transformer) {
      res.status(404).send("getById failed: Could not find any Transformer with ID of ".concat(id));
      return;
    }

    res.send(transformer);
  }

  static async deleteById(req, res) {
    const id = req.params.id;

    if (!id) {
      res.status(400).send('Missing a proper ID parameter (which should be numeric)');
      return;
    }

    const transformer = await _transformerModel.default.findByPk(id);

    if (!transformer) {
      res.status(404).send("getById failed: Could not find any Transformer with ID of ".concat(id));
      return;
    }

    try {
      await _transformerModel.default.destroy({
        where: {
          id: transformer.id
        }
      });
      res.status(204).send();
    } catch (e) {
      res.status(500).send({
        message: 'Delete by id: Something unexpected went wrong',
        error: e
      });
    }
  }

  static async deleteByName(req, res) {
    const transformer = await _transformerModel.default.findAll({
      where: {
        name: req.params.name
      }
    });

    if (transformer.length === 0) {
      res.status(404).send({
        message: "The Transformer '".concat(req.params.name, "' you attempted to delete does not exist.")
      });
      return;
    }

    try {
      await _transformerModel.default.destroy({
        where: {
          id: transformer[0].id
        }
      });
      res.status(204).send();
    } catch (e) {
      res.status(500).send({
        message: 'Delete by name: Something unexpected went wrong',
        error: e
      });
    }
  }

  static async wageWar(req, res) {
    const transformers = await _transformerModel.default.findAll();
    const war = new _war.default(transformers);
    res.send(war.wage());
  }

  static async wageWarRandom(req, res) {
    const transformers = await _transformerModel.default.findAll();
    const war = new _war.default(transformers);
    res.send(war.wage({
      randomizeSides: true
    }));
  }

  static async saveNewTransformer(req, res) {
    const newTransformer = req.body;
    const existingTransformersWithName = await _transformerModel.default.findAll({
      where: {
        name: newTransformer.name
      }
    });

    if (existingTransformersWithName.length > 0) {
      res.status(401).send({
        message: "There is already a Transformer with the name '".concat(newTransformer.name, "' in Teletran's archives.")
      });
      return;
    } else {
      process.stdout.write("Teletran-1: scanning entry for ".concat(newTransformer.allegiance, " ").concat(newTransformer.name, "..."));
      const validationResult = (0, _transformerValidator.default)().validate(newTransformer);

      if (validationResult.isValid) {
        await _transformerModel.default.create(newTransformer);
        console.log("added to archives.");
        res.status(200).send({
          success: true
        });
      } else {
        console.log('Could not add transformer to archives.', validationResult.messages);
        res.status(405).send({
          success: false,
          message: "Validation errors encountered when trying to add Transformer: ".concat(JSON.stringify(validationResult.messages))
        });
      }
    }
  }

  static async updateTransformer(req, res) {
    const transformer = req.body;
    const transformerId = +req.params.id;
    const validationResult = (0, _transformerValidator.default)().validate(transformer);

    if (!validationResult.isValid) {
      res.status(405).send({
        success: false,
        message: "Validation errors encountered when trying to add Transformer: ".concat(JSON.stringify(validationResult.messages))
      });
      return;
    }

    const existingTransformersWithName = await _transformerModel.default.findAll({
      where: {
        name: transformer.name
      }
    });

    if (existingTransformersWithName.length > 0 && existingTransformersWithName[0].id !== transformerId) {
      res.status(401).send({
        message: "There is already a Transformer with the name '".concat(transformer.name, "' in Teletran's archives.  Id provided was ").concat(transformerId, " and id in db was ").concat(existingTransformersWithName[0].id)
      });
      return;
    }

    await _transformerModel.default.update({
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
        id: transformerId
      }
    });
    const responseMessage = "Successfully updated Transformer: ".concat(transformer);
    console.log(responseMessage);
    res.status(200).send(responseMessage);
  }

}

exports.default = ServerOperations;