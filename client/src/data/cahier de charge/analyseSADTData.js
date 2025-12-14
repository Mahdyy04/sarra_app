export default [
    {
      id: "1",
      position: { x: 0, y:0 },
      type: "customSadtNode",
      data: {
        text: [
          "Mélanger et chauffer des ingrédients alimentaires pour obtenir une pâte homogène et prête à l'emploi",
        ],
      },
    },
    {
        id: "2",
        position: { x: -200, y:30 },
        type: "customNode",
        data: {
          title: "Ingrédients et mélanges bruts à traiter",
        },
      },
      {
        id: "3",
        position: { x: 350, y:30 },
        type: "customNode",
        data: {
          title: "Produit fini (après malaxage, chauffage ...)",
        },
      },
      {
        id: "4",
        position: { x: 350, y:-30 },
        type: "customNode",
        data: {
          title: "Informations",
        },
      },
      {
        id: "5",
        position: { x: 350, y:90 },
        type: "customNode",
        data: {
          title: "Défauts, états de système ou alarmes transmises par voyants/indicateurs",
        },
      },
      {
        id: "6",
        position: { x: -120, y:-150 },
        type: "customSadtTopNode",
        data: {
          title: "Energie:",
          text: [
            "Réseau triphasé (400 V)",
          ],
        },
      },
      {
        id: "7",
        position: { x: 20, y:-150 },
        type: "customSadtTopNode",
        data: {
          title: "Réglage:",
          text: [
            "Variateur de fréquence (vitesse) et thermostat (température)",
          ],
        },
      },
      {
        id: "8",
        position: { x: 160, y:-150 },
        type: "customSadtTopNode",
        data: {
          title: "Configuration:",
          text: [
            "Automate programmable",
          ],
        },
      },
      {
        id: "9",
        position: { x: 300, y:-150 },
        type: "customSadtTopNode",
        data: {
          title: "Exploitation:",
          text: [
            "Capteurs (position, température, niveau)",
          ],
        },
      },
      {
        id: "10",
        position: { x: 99, y:130 },
        type: "customSadtBottomNode",
        data: {
          title: "Système Habilis",
        },
      },
  ];
  