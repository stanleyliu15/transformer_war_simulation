import Sequelize from 'sequelize';
import TransformerModel from './models/transformer-model';
import * as DefaultTransformers from './models/sample-transformer-models';

export default function createTransformersDatabase() {
  function createTransformer(transformer) {
    process.stdout.write(
      `Teletran-1: scanning entry for ${transformer.allegiance} ${transformer.name}...`
    );
    TransformerModel.create(transformer);
    console.log(`added to archives.`);
  }

  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: ':memory',
    logging: false
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log('Teletran-1 initialized.');
    })
    .catch(err => {
      console.error('Teletran-1 initialization unsuccessful:', err);
    });

  TransformerModel.initializeSchema(sequelize);

  TransformerModel.sync({ force: true }).then(() => {
    createTransformer(DefaultTransformers.OptimusPrime);
    createTransformer(DefaultTransformers.Beachcomber);
    createTransformer(DefaultTransformers.Jetfire);
    createTransformer(DefaultTransformers.Kup);
    createTransformer(DefaultTransformers.Smokescreen);

    createTransformer(DefaultTransformers.Megatron);
    createTransformer(DefaultTransformers.Cyclonus);
    createTransformer(DefaultTransformers.Ravage);
    createTransformer(DefaultTransformers.Scorponok);
    createTransformer(DefaultTransformers.Soundwave);
  });

  return sequelize;
}
