export default [
  {
    id: "1",
    position: { x: -100, y: 0 },
    type: "customNode",
    data: {
      title: "Consigne"
    },
  },
  {
    id: "2",
    position: { x: 0, y: 0 },
    type: "customNode",
    data: {
      title: "Acquérir",
      text: [
        "- Commande de vitesse",
        "- Capteurs inductifs (position haute et basse)",
        "- Capteur de niveau (détection maximum de matière)",
        "- Commutateur de commande (vitesse, chauffage, malaxage)",
        "- Bouton d'arrêt d'urgence",
        "- Interrupteur de sécurité",
        "- Capteur de température à base de sonde PT100",
      ],
    },
  },
  {
    id: "3",
    position: { x: 200, y: 0 },
    type: "customNode",
    data: {
      title: "Traiter",
      text: [
        "- Automate programmable",
        "- Régulateur de chauffage",
        "- Système de détection de défauts (surveillance des conditions critiques)",
      ],
    },
  },
  {
    id: "4",
    position: { x: 400, y: 0 },
    type: "customNode",
    data: {
      title: "Communiquer",
      text: [
        "- Voyant de présence de tension",
        "- Voyant défaut général",
        "- Voyant position couvercle",
        "- Voyant en service (malaxage)",
        "- Voyant en service (chauffage)",
        "- Voyant de régulation",
        "- Voyant mode de fonctionnement",
      ],
    },
  },{
    id: "5",
    position: { x: 570, y: 0 },
    type: "customNode",
    data: {
      title: "Message"
    },
  },
];
