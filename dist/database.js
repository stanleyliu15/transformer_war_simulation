"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTransformersDatabase;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _transformerModel = _interopRequireDefault(require("./models/transformer-model"));

var DefaultTransformers = _interopRequireWildcard(require("./models/sample-transformer-models"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTransformersDatabase() {
  function createTransformer(transformer) {
    process.stdout.write("Teletran-1: scanning entry for ".concat(transformer.allegiance, " ").concat(transformer.name, "..."));

    _transformerModel.default.create(transformer);

    console.log("added to archives.");
  }

  const sequelize = new _sequelize.default({
    dialect: 'sqlite',
    storage: ':memory',
    logging: false
  });
  sequelize.authenticate().then(() => {
    console.log('Teletran-1 initialized.');
  }).catch(err => {
    console.error('Teletran-1 initialization unsuccessful:', err);
  });

  _transformerModel.default.initializeSchema(sequelize);

  _transformerModel.default.sync({
    force: true
  }).then(() => {
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