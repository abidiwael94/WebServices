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
# updateAgent

<!-- 
mutation UpdateAgent {
  updateAgent(
    id: "L_ID_DU_AGENT"  # Remplace ceci par l'ID réel
    input: {
      nom: "Dupont"
      prenom: "Jean-Paul"
      email: "jean.paul.dupont@example.com"
      bio: "Expert en cybersécurité avancée"
      competences: [
        { nom: "Cybersécurité", niveau: "Expert" }
        { nom: "Analyse de risque", niveau: "Avancé" }
      ]
      liens: [
        { type: "LinkedIn", url: "https://linkedin.com/in/jeanpauldupont" }
      ]
    }
  ) {
    id
    nom
    prenom
    email
  }
}
# deleteAgent

<!--
mutation DeleteAgent {
  deleteAgent(id: "L_ID_DU_AGENT")  # Remplace ceci par l'ID réel
}
 -->