/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import cors = require('cors');
import { restaurants } from './resto-data';
const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api-express!' });
});

app.get('/api/restaurant', (req, res) => {
  console.log('testing');
  res.send(restaurants);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
