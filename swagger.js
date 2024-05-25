const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'willisDeckBuilderAPI',
    description: 'MTG deck builder',
  },
  host: 'localhost:4000',
};

const outputFile = './swagger-output.json';
const routes = ['server.js', './routes/index.js'];
console.log('willis', routes);

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);