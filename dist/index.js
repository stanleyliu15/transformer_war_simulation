"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = startTransformersServer;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _database = _interopRequireDefault(require("./database"));

var _domain = require("domain");

var _transformerModel = _interopRequireDefault(require("./models/transformer-model"));

var _serverOperations = _interopRequireDefault(require("./server-operations"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _net = require("net");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cors = require('cors');

function startTransformersServer(_ref) {
  let {
    httpPort
  } = _ref;
  let app = (0, _express.default)();
  app.use(cors({
    origin: '*',
    methods: 'GET,POST,OPTIONS,DELETE',
    preflightContinue: false
  }));

  const jsonParser = _bodyParser.default.json();

  const database = (0, _database.default)();

  const swaggerDocument = require('../swagger.json');

  app.use('/api-docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(swaggerDocument));
  app.get('/transformers', jsonParser, _serverOperations.default.findAll);
  app.post('/transformers', jsonParser, _serverOperations.default.saveNewTransformer);
  app.get('/transformers/:id', jsonParser, _serverOperations.default.getById);
  app.put('/transformers/:id', jsonParser, _serverOperations.default.updateTransformer);
  app.delete('/transformers/:id', jsonParser, _serverOperations.default.deleteById);
  app.get('/transformers/allegiance/autobot', jsonParser, _serverOperations.default.getAutobots);
  app.get('/transformers/allegiance/decepticon', jsonParser, _serverOperations.default.getDecepticons);
  app.get('/war', jsonParser, _serverOperations.default.wageWar);
  app.get('/war/randomize', jsonParser, _serverOperations.default.wageWarRandom);
  app.listen(httpPort);
  console.log("Teletran API is listening on port ".concat(httpPort, ":"));
  console.log("Swagger Teletran API documentation available at localhost:".concat(httpPort, "/api-docs"));
  return app;
}