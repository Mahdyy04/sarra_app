export default [
    {
      id: "1",
      position: { x: -110, y: 0 },
      type: "customNode",
      data: {
        title: "Consigne",
      },
    },
    {
      id: "2",
      position: { x: 0, y: 0 },
      type: "customNode",
      data: {
        title: "Acquérir",
        text: [
          "- Capteur de température (sonde PT100).",
          "- Commande utilisateur (consigne de température).",
        ],
      },
    },
    {
      id: "3",
      position: { x: 200, y: 0 },
      type: "customNode",
      data: {
        title: "Traiter",
        text: ["- Automate programmable"],
      },
    },
    {
      id: "4",
      position: { x: 400, y: 0 },
      type: "customNode",
      data: {
        title: "Communiquer",
        text: ["- Voyants : Chauffage actif, consigne atteinte."],
      },
    },
    {
      id: "5",
      position: { x: 600, y: 0 },
      type: "customNode",
      data: {
        title: "Message",
      },
    },
    {
      id: "6",
      position: { x: -50, y: 200 },
      type: "customNode",
      data: {
        title: "Energie d'entrée",
      },
    },
    {
      id: "7",
      position: { x: 100, y: 200 },
      type: "customNode",
      data: {
        title: "Alimenter",
        text: [
          "- Réseau triphasé",
          "- Disjoncteurs différentiels",
          "- Parafoudres"
        ],
      },
    },
    {
      id: "8",
      position: { x: 280, y: 200 },
      type: "customNode",
      data: {
        title: "Distribuer",
        text: [
          "- Thermostat électronique",
          "- Relais de protection"
        ],
      },
    },
    {
      id: "9",
      position: { x: 460, y: 200 },
      type: "customNode",
      data: {
        title: "Convertir",
        text: [
          "- Résistances électriques en étoile (convertissent l’énergie électrique en thermique)",
        ],
      },
    },
    {
      id: "10",
      position: { x: 680, y: 200 },
      type: "customNode",
      data: {
        title: "Transmettrer",
        text: [],
      },
    },
    {
      id: "11",
      position: { x: 870, y: 200 },
      type: "customFunctionNode",
      data: {
        title: "Action",
        text: [
          "- Chauffage uniforme de la cuve pour maintenir la température définie",
        ],
      },
    },
    {
      id: "12",
      position: { x: 922, y: 120 },
      type: "customFunctionNode",
      data: {
        title: "MOE",
      },
    },
    {
      id: "13",
      position: { x: 922, y: 320 },
      type: "customFunctionNode",
      data: {
        title: "MOS",
      },
    },
  ];
  