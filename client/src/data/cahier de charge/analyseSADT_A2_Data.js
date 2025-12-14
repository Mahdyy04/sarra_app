export default [
    {
      id: "1",
      position: { x: -300, y: 0 },
      type: "customNode",
      data: {
          title:"instructions utilisateur"
      },
    },
    {
      id: "2",
      position: { x: -120, y: 0 },
      type: "customDoubleTopHandlesNode",
      data: {
        title: "Recevoir les données",
        text:["Modules d’entrée de l’automate"],
        number:"A21"
      },
    },
    {
      id: "3",
      position: { x: 150, y: 80 },
      type: "customDoubleTopHandlesNode",
      data: {
        title: "Analyser les commandes",
        text:["Programme API"],
        number:"A22"
      },
    },
    {
      id: "4",
      position: { x: 420, y: 150 },
      type: "customDoubleTopHandlesNode",
      data: {
        title: "Générer les ordres",
        text:["Sorties API"],
        number:"A23"
      },
    },
    {
      id: "5",
      position: { x: -130, y: -150 },
      type: "customSadtTopNode",
      data: {
        title: "Exploitation"
      },
    },
    {
      id: "6",
      position: { x: 300, y: -150 },
      type: "customSadtTopNode",
      data: {
        title: "Configuration"
      },
    },
    {
      id: "7",
      position: { x: 520, y: -150 },
      type: "customSadtTopNode",
      data: {
        title: "Reglage"
      },
    },
    {
      id: "8",
      position: { x: 200, y: 220 },
      type: "customNode",
      data: {
        title: "Instructions traitées"
      },
    },
    {
      id: "9",
      position: { x: 620, y: 150 },
      type: "customNode",
      data: {
        title: "secteur triphasé"
      },
    },
    {
      id: "10",
      position: { x: 620, y: 200 },
      type: "customNode",
      data: {
        title: "Ordre pour variateurs"
      },
    },
  ];
  