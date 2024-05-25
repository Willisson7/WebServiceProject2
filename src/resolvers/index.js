const { getCardById, getCardsByName } = require('../models/cards');

const resolvers = {
  Query: {
    card: async (parent, args) => {
      return await getCardById(args.id);
    },
    cards: async (parent, args) => {
      return await getCardsByName(args.name);
    },
  },
};

module.exports = resolvers;
