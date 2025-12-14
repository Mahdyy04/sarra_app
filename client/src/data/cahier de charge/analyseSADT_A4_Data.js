export default [
  {
    id: "1",
    position: { x: -300, y: 0 },
    type: "customNode",
    data: {
      title: "énergie mécanique et thermique",
    },
  },
  {
    id: "2",
    position: { x: -120, y: 0 },
    type: "customDoubleTopHandlesNode",
    data: {
      title: "Générer la chaleur",
      text: ["résistances chauffantes + moteur triphasé"],
      number: "A41",
    },
  },
  {
    id: "3",
    position: { x: 150, y: 80 },
    type: "customDoubleTopHandlesNode",
    data: {
      title: "Malaxer à vitesse contrôlée",
      text: ["pâles de malaxage"],
      number: "A42",
    },
  },
  {
    id: "4",
    position: { x: 420, y: 150 },
    type: "customDoubleTopHandlesNode",
    data: {
      title: "Transmettre les instructions",
      text: ["capteurs"],
      number: "A43",
    },
  },
  {
    id: "5",
    position: { x: 100, y: -100 },
    type: "customSadtTopNode",
    data: {
      title: "Energie",
    },
  },
  {
    id: "6",
    position: { x: 395, y: -100 },
    type: "customSadtTopNode",
    data: {
      title: "Configuration Exploitation Reglage",
    },
  },
  {
    id: "7",
    position: { x: 200, y: 220 },
    type: "customNode",
    data: {
      title: "Données capteurs (température, consistance…)",
    },
  },
  {
    id: "8",
    position: { x: 620, y: 150 },
    type: "customNode",
    data: {
      title: "produit final (pâte)",
    },
  },
  {
    id: "9",
    position: { x: 620, y: 220 },
    type: "customNode",
    data: {
      title: "Ajustement processus",
    },
  },
];
