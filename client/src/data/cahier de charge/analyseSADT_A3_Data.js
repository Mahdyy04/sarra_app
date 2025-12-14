export default [
  {
    id: "1",
    position: { x: -300, y: 0 },
    type: "customNode",
    data: {
      title: "secteur triphasé",
    },
  },
  {
    id: "2",
    position: { x: -120, y: 0 },
    type: "customDoubleTopHandlesNode",
    data: {
      title: "Protéger les circuits",
      text: ["sectionneurs + disjoncteurs"],
      number: "A31",
    },
  },
  {
    id: "3",
    position: { x: 150, y: 80 },
    type: "customDoubleTopHandlesNode",
    data: {
      title: "Distribuer l’énergie",
      text: ["contacteurs"],
      number: "A32",
    },
  },
  {
    id: "4",
    position: { x: 420, y: 150 },
    type: "customDoubleTopHandlesNode",
    data: {
      title: "Moduler l’énergie",
      text: ["variateurs + régulateur"],
      number: "A33",
    },
  },
  {
    id: "5",
    position: { x: 200, y: -100 },
    type: "customSadtTopNode",
    data: {
      title: "Energie",
    },
  },
  {
    id: "6",
    position: { x: 480, y: -100 },
    type: "customSadtTopNode",
    data: {
      title: "Configuration Reglage",
    },
  },
  {
    id: "7",
    position: { x: 200, y: 220 },
    type: "customNode",
    data: {
      title: "Commandes automates",
    },
  },
  {
    id: "8",
    position: { x: 620, y: 150 },
    type: "customNode",
    data: {
      title: "énergie mécanique et thermique",
    },
  },
  {
    id: "9",
    position: { x: 620, y: 220 },
    type: "customNode",
    data: {
      title: "Energie ajustée",
    },
  },
];
