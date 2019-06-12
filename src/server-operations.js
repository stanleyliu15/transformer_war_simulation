import TransformerModel from './models/transformer-model';
import War from './war';
import TransformerValidator from './validations/transformer-validator';
import { Allegiances } from './constants/allegiances';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

export default class ServerOperations {
  static async findAll(req, res) {
    const transformers = req.query.name
      ? await TransformerModel.findAll({
          where: {
            name: {
              [Op.like]: `%${req.query.name}%`
            }
          }
        })
      : await TransformerModel.findAll();
    res.send(transformers);
  }
  static async getAutobots(req, res) {
    const transformers = await TransformerModel.findAll({
      where: {
        allegiance: Allegiances.Autobot
      }
    });
    res.send(transformers);
  }

  static async getDecepticons(req, res) {
    const transformers = await TransformerModel.findAll({
      where: {
        allegiance: Allegiances.Decepticon
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
    const transformer = await TransformerModel.findByPk(id);
    if (!transformer) {
      res.status(404).send(`getById failed: Could not find any Transformer with ID of ${id}`);
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
    const transformer = await TransformerModel.findByPk(id);
    if (!transformer) {
      res.status(404).send(`getById failed: Could not find any Transformer with ID of ${id}`);
      return;
    }

    try {
      await TransformerModel.destroy({
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
    const transformer = await TransformerModel.findAll({
      where: {
        name: req.params.name
      }
    });
    if (transformer.length === 0) {
      res.status(404).send({
        message: `The Transformer '${req.params.name}' you attempted to delete does not exist.`
      });
      return;
    }
    try {
      await TransformerModel.destroy({
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
    const transformers = await TransformerModel.findAll();
    const war = new War(transformers);
    res.send(war.wage());
  }

  static async wageWarRandom(req, res) {
    const transformers = await TransformerModel.findAll();
    const war = new War(transformers);
    res.send(war.wage({ randomizeSides: true }));
  }

  static async saveNewTransformer(req, res) {
    const newTransformer = req.body;
    const existingTransformersWithName = await TransformerModel.findAll({
      where: {
        name: newTransformer.name
      }
    });
    if (existingTransformersWithName.length > 0) {
      res.status(401).send({
        message: `There is already a Transformer with the name '${
          newTransformer.name
        }' in Teletran's archives.`
      });
      return;
    } else {
      process.stdout.write(
        `Teletran-1: scanning entry for ${newTransformer.allegiance} ${newTransformer.name}...`
      );
      const validationResult = TransformerValidator().validate(newTransformer);
      if (validationResult.isValid) {
        await TransformerModel.create(newTransformer);
        console.log(`added to archives.`);
        res.status(200).send({ success: true });
      } else {
        console.log('Could not add transformer to archives.', validationResult.messages);
        res.status(405).send({
          success: false,
          message: `Validation errors encountered when trying to add Transformer: ${JSON.stringify(
            validationResult.messages
          )}`
        });
      }
    }
  }

  static async updateTransformer(req, res) {
    const transformer = req.body;
    const transformerId = +req.params.id;

    const validationResult = TransformerValidator().validate(transformer);
    if (!validationResult.isValid) {
      res.status(405).send({
        success: false,
        message: `Validation errors encountered when trying to add Transformer: ${JSON.stringify(
          validationResult.messages
        )}`
      });
      return;
    }

    const existingTransformersWithName = await TransformerModel.findAll({
      where: {
        name: transformer.name
      }
    });

    if (
      existingTransformersWithName.length > 0 &&
      existingTransformersWithName[0].id !== transformerId
    ) {
      res.status(401).send({
        message: `There is already a Transformer with the name '${
          transformer.name
        }' in Teletran's archives.  Id provided was ${transformerId} and id in db was ${
          existingTransformersWithName[0].id
        }`
      });
      return;
    }

    await TransformerModel.update(
      {
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
      },
      {
        where: {
          id: transformerId
        }
      }
    );
    const responseMessage = `Successfully updated Transformer: ${transformer}`;
    console.log(responseMessage);
    res.status(200).send(responseMessage);
  }
}
