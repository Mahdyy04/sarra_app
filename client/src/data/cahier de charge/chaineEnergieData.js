export default [
  {
    id: "1",
    position: { x: -150, y: 0 },
    type: "customNode",
    data: {
      title: "Energie d’entrée",
    },
  },
  {
    id: "2",
    position: { x: 0, y: 0 },
    type: "customNode",
    data: {
      title: "Alimenter",
      text: [
        "- Réseau triphasé 2000V",
        "- Interrupteur de puissance",
        "- Disjoncteurs différentiels",
        "- Relais thermiques",
        "- Fusibles",
        "- Transformateurs",
        "- Parafoudres",
      ],
    },
  },
  {
    id: "3",
    position: { x: 200, y: 0 },
    type: "customNode",
    data: {
      title: "Distribuer",
      text: [
        "- Contacteurs auxiliaires",
        "- Relais temporisés",
        "- Boîtiers de commande",
        "- Thermostat électronique",
      ],
    },
  },
  {
    id: "4",
    position: { x: 400, y: 0 },
    type: "customNode",
    data: {
      title: "Convertir",
      text: [
        "- Moteur asynchrone triphasé",
        "- Moto-réducteur triphasé",
        "- Résistances électriques en étoile",
        "- Variateurs de fréquence",
      ],
    },
  },
  {
    id: "5",
    position: { x: 100, y: 250 },
    type: "customNode",
    data: {
      title: "Transmettre",
      text: [
        "- Limiteur de couple",
        "- Accouplement mécanique",
        "- Pignons de transmission",
      ],
    },
  },
  {
    id: "6",
    position: { x: 300, y: 250 },
    type: "customNode",
    data: {
      title: "Action",
      text: [
        "- Mise en mouvement des pales",
        "- Fermeture et ouverture du couvercle",
        "- Chauffage uniforme",
      ],
    },
  },
];
