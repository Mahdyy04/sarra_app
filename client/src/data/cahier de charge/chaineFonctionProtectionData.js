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
        "- Capteurs de défaut.",
        "- Bouton d'arrêt d'urgence.",
        "- Interrupteur de sécurité.",
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
      text: ["- Voyants : Indicateur de défaut général, surcharge."],
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
        "- Relais thermiques",
        "- Disjoncteurs différentiels",
        "- Parafoudres",
      ],
    },
  },
  {
    id: "8",
    position: { x: 280, y: 200 },
    type: "customNode",
    data: {
      title: "Distribuer",
      text: ["- Contacteurs auxiliaires pour isoler le circuit défectueux"],
    },
  },
  {
    id: "9",
    position: { x: 500, y: 200 },
    type: "customNode",
    data: {
      title: "Convertir",
      text: [],
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
        "- Coupure immédiate de l’alimentation ou arrêt du système pour prévenir les dommages",
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
