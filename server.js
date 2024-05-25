require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./src/typeDefs');
const resolvers = require('./src/resolvers');
const mongodb = require('./db/connect');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;
const app = express();

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  app
    .use(cors())
    .use(bodyParser.json())
    .use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    })
    .use('/', require('./routes'));

  server.applyMiddleware({ app });

  mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port, () => {
        console.log(`Connected to DB and listening on port ${port}`);
      });
    }
  });
};

startServer();
