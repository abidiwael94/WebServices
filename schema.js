const { gql } = require('apollo-server');

const typeDefs = gql`
  # Types
  type Competence {
    nom: String!
    niveau: String!
  }

  type LienPro {
    type: String!
    url: String!
  }

  type Agent {
    id: ID!
    nom: String!
    prenom: String!
    email: String!
    bio: String
    competences: [Competence]
    liens: [LienPro]
  }

  # Inputs
  input CompetenceInput {
    nom: String!
    niveau: String!
  }

  input LienProInput {
    type: String!
    url: String!
  }

  input AgentInput {
    nom: String!
    prenom: String!
    email: String!
    bio: String
    competences: [CompetenceInput]
    liens: [LienProInput]
  }
`;

module.exports = { typeDefs };