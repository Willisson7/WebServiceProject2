const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

router.get('/', (req, res) => {
  res.send('Welcome to the MTG Deck Builder');
});

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// router.use('/contacts', require('./contacts'));

module.exports = router;
