const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Card {
    id: ID!
    name: String
    manaCost: String
    type: String
    rarity: String
  }

  type Query {
    card(id: ID!): Card
    cards(name: String): [Card]
  }
`;
module.exports = typeDefs;
