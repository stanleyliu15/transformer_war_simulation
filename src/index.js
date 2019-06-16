import express from 'express';
import bodyParser from 'body-parser';
import createDatabase from './database';
import { create } from 'domain';
import TransformerModel from './models/transformer-model';
import ServerOperations from './server-operations';
import swaggerUi from 'swagger-ui-express';
import { Server } from 'net';

const cors = require('cors');

export default function startTransformersServer({ httpPort }) {
  let app = express();
  app.use(
    cors({
      origin: '*',
      methods: 'GET,POST,PUT,OPTIONS,DELETE',
      preflightContinue: false
    })
  );

  const jsonParser = bodyParser.json();

  const database = createDatabase();

  const swaggerDocument = require('../swagger.json');

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.get('/transformers', jsonParser, ServerOperations.findAll);

  app.post('/transformers', jsonParser, ServerOperations.saveNewTransformer);

  app.get('/transformers/:id', jsonParser, ServerOperations.getById);
  app.put('/transformers/:id', jsonParser, ServerOperations.updateTransformer);
  app.delete('/transformers/:id', jsonParser, ServerOperations.deleteById);

  app.get('/transformers/allegiance/autobot', jsonParser, ServerOperations.getAutobots);
  app.get('/transformers/allegiance/decepticon', jsonParser, ServerOperations.getDecepticons);

  app.get('/war', jsonParser, ServerOperations.wageWar);
  app.get('/war/randomize', jsonParser, ServerOperations.wageWarRandom);

  app.listen(httpPort);
  console.log(`Teletran API is listening on port ${httpPort}:`);
  console.log(`Swagger Teletran API documentation available at localhost:${httpPort}/api-docs`);
  return app;
}
