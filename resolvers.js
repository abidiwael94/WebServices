const { agents } = require('./data');

const resolvers = {
  Query: {
    agents: () => agents,

    agent: (_, { id }) => {
      return agents.find(a => a.id === id);
    }
  }
};

module.exports = { resolvers };