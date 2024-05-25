const axios = require('axios');

const getCardById = async (id) => {
  const response = await axios.get(
    `https://api.magicthegathering.io/v1/cards/${id}`
  );
  return response.data.card;
};

const getCardsByName = async (name) => {
  const response = await axios.get(
    'https://api.magicthegathering.io/v1/cards',
    {
      params: { name },
    }
  );
  return response.data.cards;
};

module.exports = {
  getCardById,
  getCardsByName,
};
