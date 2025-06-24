const { agents } = require('./data');

const resolvers = {
  Query: {
    agents: () => agents,

    agent: (_, { id }) => {
      return agents.find(a => a.id === id);
    }
  },

  Mutation: {
    createAgent: (_, { input }) => {
      if (!input.nom || !input.email) {
        throw new Error("Le nom et l'email sont obligatoires.");
      }
      const newAgent = { id: uuidv4(), ...input };
      agents.push(newAgent);
      return newAgent;
    },

    updateAgent: (_, { id, input }) => {
      const index = agents.findIndex(a => a.id === id);
      if (index === -1) throw new Error("Agent non trouvé.");
      agents[index] = { id, ...input };
      return agents[index];
    },

    deleteAgent: (_, { id }) => {
      const index = agents.findIndex(a => a.id === id);
      if (index > -1) {
        console.log(`Agent supprimé : ${agents[index].nom}`);
        agents.splice(index, 1);
        return true;
      }
      return false;
    }
  }
};

module.exports = { resolvers };