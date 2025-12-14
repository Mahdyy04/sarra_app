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
        "- Surveillance des variations de tension et de courant.",
        "- Relais de protection pour détecter les anomalies.",
      ],
    },
  },
  {
    id: "3",
    position: { x: 200, y: 0 },
    type: "customNode",
    data: {
      title: "Traiter",
      text: ["- Régulateur intégré pour ajuster et stabiliser l’alimentation"],
    },
  },
  {
    id: "4",
    position: { x: 400, y: 0 },
    type: "customNode",
    data: {
      title: "Communiquer",
      text: ["- Voyants : Présence de tension, anomalies détectées."],
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
      text: ["- Réseau triphasé", "- Transformataurs", "- Parafoudres"],
    },
  },
  {
    id: "8",
    position: { x: 280, y: 200 },
    type: "customNode",
    data: {
      title: "Distribuer",
      text: ["- Relais temporisés ", "- Contacteurs"],
    },
  },
  {
    id: "9",
    position: { x: 460, y: 200 },
    type: "customNode",
    data: {
      title: "Convertir",
      text: [
        "Transformateurs pour stabiliser la tension et assurer une alimentation stable",
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
        "- Fourniture d'une énergie stable et continue aux composants opératifs",
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
