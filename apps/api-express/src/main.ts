/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as http from 'http';
import cors = require('cors');
import { restaurants } from './resto-data';

import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer, gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
    restaurants: [Restaurant]
  }

  type Restaurant {
    id: Int
    name: String
    neighborhood: String
    photograph: String
    address: String
    latlng: Latlng
    cuisine_type: String
    operating_hours: OperatingHours
    reviews: [Review]
  }

  type Latlng {
    lat: Int
    lng: Int
  }

  type OperatingHours {
    Monday: String
    Tuesday: String
    Wednesday: String
    Thursday: String
    Friday: String
    Saturday: String
    Sunday: String
  }

  type Review {
    name: String
    date: String
    rating: Int
    comments: String
  }
`;

// Return a list of users
const getRestaurants = function () {
  console.log('the resto', restaurants);
  return restaurants;
};

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    restaurants: getRestaurants,
  },
};

async function listen(port: number) {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  app.use(cors());
  return new Promise((resolve, reject) => {
    httpServer.listen(port).once('listening', resolve).once('error', reject);
  });
}

async function main() {
  try {
    await listen(4000);
    console.log('Server is ready at http://localhost:4000/graphql');
  } catch (err) {
    console.error(' Error starting the node server', err);
  }
}

void main();
