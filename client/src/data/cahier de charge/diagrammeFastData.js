export default [
  {
    name: "1) Assurer le malaxage homogène du produit",
    children: [
      {
        name: "Malaxer le produit",
        children: [
          {
            name: "Ajuster la vitesse de rotation",
            children: [{ name: "Variateur de fréquence" }],
          },
          {
            name: "Contrôler la puissance",
            children: [{ name: "Régulateur automatique" }],
          },
          {
            name: "Synchroniser le mouvement de la pale tournante",
            children: [{ name: "Moteur triphasé" }],
          },
        ],
      },
      {
        name: "Fermer et ouvrir le couvercle",
        children: [
          {
            name: "Contrôler l’ouverture et fermeture",
            children: [{ name: "Automate programmable" }],
          },
          {
            name: "Assurer la sécurité lors de la fermeture",
            children: [{ name: "Capteur inductif de sécurité" }],
          },
          {
            name: "Amortir les mouvements brusques",
            children: [{ name: "Amortisseurs" }],
          },
        ],
      },
      {
        name: "Commander la manoeuvre du couvercle",
        children: [
          {
            name: "Réguler la vitesse de déplacement",
            children: [{ name: "Servomoteur" }],
          },
          {
            name: "Détecter les obstacles",
            children: [{ name: "Système de détection d’obstacle" }],
          },
          {
            name: "Arrêter automatiquement en cas de danger",
            children: [{ name: "Capteur d’obstacle integré" }],
          },
        ],
      },
      {
        name: "Détecter la position de la pale",
        children: [
          {
            name: "Localiser la position haute et basse",
            children: [{ name: "Capteurs inductifs" }],
          },
          {
            name: "Indiquer visuellement la position",
            children: [{ name: "Voyant de signalisation" }],
          },
          {
            name: "Emettre une alerte sonore si position incorrecte",
            children: [{ name: "Système sonore" }],
          },
        ],
      },
      {
        name: "Convertir l’énergie électrique en mécanique",
        children: [
          {
            name: "Ajuster la puissance du moteur",
            children: [{ name: "Variateur de fréquence" }],
          },
          {
            name: "Utiliser une alimentation alternative",
            children: [{ name: "Cellules photovoltaiques " }],
          },
          {
            name: "Protéger le moteur contre les surcharges",
            children: [{ name: "Disjoncteur thermique" }],
          },
        ],
      },
      {
        name: "Permettre le remplissage et l’évacuation de la cuve",
        children: [
          {
            name: "Ouvrir et fermer les trappes",
            children: [{ name: "Système de trappes motorisées" }],
          },
          {
            name: "Détecter le niveau de remplissage",
            children: [{ name: "Capteur de niveau" }],
          },
          {
            name: "Bloquer l’ouverture en cas de danger",
            children: [{ name: "Système de verouillage automatique" }],
          },
        ],
      },
      {
        name: "Détecter le niveau maximum de la matière",
        children: [
          {
            name: "Evaluer la précision de remplissage",
            children: [{ name: "Cellule photoélectrique" }],
          },
          {
            name: "Alerter en cas de dépassement",
            children: [{ name: "Système visuel et sonore" }],
          },
          {
            name: "Arrêter le remplissage automatiquement",
            children: [{ name: "Capteur de niveau intégré" }],
          },
        ],
      },
    ],
  },
  {
    name: "2) Assurer le chauffage",
    children: [
      {
        name: "Signaler le chauffage",
        children: [
          {
            name: "Activer l’indicateur visuel de chauffage",
            children: [{ name: "Voyant actif" }],
          },
          {
            name: "Détecter les dépassements de température",
            children: [{ name: "Signal sonore" }],
          },
          {
            name: "Contrôler le démarrage et l’arrêt",
            children: [{ name: "Thermostat programmable" }],
          },
        ],
      },
      {
        name: "Régler la température",
        children: [
          {
            name: "Ajuster manuellement la consigne",
            children: [{ name: "Interface utilisateur" }],
          },
          {
            name: "Analyser les variations thermiques",
            children: [{ name: "Historique intégré" }],
          },
          {
            name: "Stabiliser la température autour de la consigne",
            children: [{ name: "Thermostat électronique" }],
          },
        ],
      },
      {
        name: "Transformer l’énergie électrique en thermique",
        children: [
          {
            name: "Générer de la chaleur de manière uniforme",
            children: [{ name: "Résistances en étoile" }],
          },
          {
            name: "Contrôler la dissipation thermique",
            children: [{ name: "Système de surveillance" }],
          },
          {
            name: "Eviter la surchauffe",
            children: [{ name: "Capteur thermique" }],
          },
        ],
      },
    ],
  },
  {
    name: "3) Protéger le système",
    children: [
      {
        name: "Protéger les actionneurs contre les courts-circuits",
        children: [
          {
            name: "Détecter les anomalies électriques",
            children: [{ name: "Disjoncteur différentiel 30mA" }],
          },
          {
            name: "Couper l’alimentation en cas de c-c",
            children: [{ name: "Protection thermique" }],
          },
          {
            name: "Identifier les zones défaillantes",
            children: [{ name: "Voyant d’alerte" }],
          },
        ],
      },
      {
        name: "Signaler en cas de coupure d’urgence",
        children: [
          {
            name: "Arrêter manuellement le système",
            children: [{ name: "Bouton d’arrêt d’urgence" }],
          },
          {
            name: "Confirmer l’arrêt complet visuellement",
            children: [{ name: "Indicateur visuel" }],
          },
          {
            name: "Empêcher la réactivation involontaire",
            children: [{ name: "Système de verouillage" }],
          },
        ],
      },
      {
        name: "Adapter la partie opérative au réseau",
        children: [
          {
            name: "Réguler automatiquement la tension",
            children: [{ name: "Variateur de fréquence" }],
          },
          {
            name: "Isoler le système pour maintenance",
            children: [{ name: "Sectionneur manuel" }],
          },
          {
            name: "Protéger contre les surtensions",
            children: [{ name: "Système de suppression de pics" }],
          },
        ],
      },
      {
        name: "Signaler la présence de tension",
        children: [
          {
            name: "Alerter sur la tension active",
            children: [{ name: "Voyant de présence" }],
          },
          {
            name: "Couper automatiquement en cas de surtension",
            children: [{ name: "Relais temporisé" }],
          },
          {
            name: "Vérifier la stabilité du courant",
            children: [{ name: "Surveillance constante" }],
          },
        ],
      },
    ],
  },
  {
    name: "4) Assurer l'alimentation de la partie opérative",
    children: [
      {
        name: "Fournir une alimentation stable",
        children: [
          {
            name: "Stabiliser la tension en entrée",
            children: [{ name: "Transformateur" }],
          },
          {
            name: "Surveiller la tension et le courant en temps réel",
            children: [{ name: "Système integré" }],
          },
          {
            name: "Répartir uniformément l’alimentation",
            children: [{ name: "Régulateur électronique" }],
          },
        ],
      },
      {
        name: "Protéger contre les surtensions",
        children: [
          {
            name: "Absorber les pics de tension",
            children: [{ name: "Parafoudre" }],
          },
          {
            name: "Délayer l’activation des circuits sensibles",
            children: [{ name: "Relais temporisé" }],
          },
          {
            name: "Isoler les circuits critiques",
            children: [{ name: "Sectionneur automatique" }],
          },
        ],
      },
    ],
  },
];
