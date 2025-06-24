# WebServices

# addagent

<!-- 
mutation CreateAgent {
  createAgent(
    input: {
      nom: "Dupont"
      prenom: "Jean"
      email: "jean.dupont@example.com"
      bio: "Expert en sécurité"
      competences: [
        { nom: "Cybersécurité", niveau: "Avancé" }
        { nom: "Analyse", niveau: "Intermédiaire" }
      ]
      liens: [
        { type: "LinkedIn", url: "https://linkedin.com/in/jeandupont" }
        { type: "GitHub", url: "https://github.com/jeandupont" }
      ]
    }
  ) {
    id
    nom
    prenom
    email
  }
}
 -->
# get all agent 

<!-- 
query GetAllAgents {
  agents {
    id
    nom
    prenom
    email
    bio
    competences {
      nom
      niveau
    }
    liens {
      type
      url
    }
  }
}

 -->