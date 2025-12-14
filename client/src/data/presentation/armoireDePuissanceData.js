export default {
  definition:
    "comporte 3 departements et un emplacement libre, tous reliés à un jeu de barres tétrapolaire. Elle inclut un interrupteur de puissance manuel et un disjoncteur différentiel, tous deux cadenassables. Ces composants assurent la protection et la gestion de l'alimentation électrique.",
  aGauche:
    "La section gauche contrôle la pale du malaxeur via un moteur asynchrone triphasé. Ce départ inclut un sectionneur cadenassable, un contacteur, un variateur de fréquence (ATV 18), et un onduleur intégré à la porte de l’armoire.",
  auCentre:
    "La section centrale qui commande l’ouverture et la fermeture du couvercle du malaxeur grâce à un motoréducteur. Elle comprend un disjoncteur magnétique cadenassable (GV2L), un contacteur-inverseur, et un relais thermique différentiel.",
  aDroite: {
    partie1:
      "La section droite gère le chauffage de la cuve à l’aide de résistances. Ce départ est équipé d’un sectionneur tétrapolaire cadenassable et d’un contacteur tétrapolaire pour contrôler le chauffage.",
    partie2:
      "Une prise de courant simple, protégée par un disjoncteur de sécurité de 30mA, permet de brancher un appareil de mesure ou un petit outil (comme un fer à souder ou une perceuse). Cette source est coupée par le disjoncteur principal du boîtier électrique",
  },
  partieSuperieur: `Deux convertisseurs pour les circuits de commande et de signalisation (entrée 240Vac, sortie 24Vac), protégés par des coupe-circuits verrouillables. Un témoin lumineux et un sélecteur permettant la mise en route avec l’onduleur. Un ensemble de relais additionnels assurant une logique combinatoire câblée. Un dispositif de barres de puissance, recouvert d'un capot de protection fixé par quatre supports et verrouillé avec des vis quart de tour.`,
  liaisonsAvecExterieur: `En bas à droite, un connecteur de type mâle/femelle non relié, prévu pour un départ additionnel éventuel. Sous la connexion de chauffage, au centre, trois connecteurs verticaux marqués J1, J2, J3, qui permettent de brancher un pupitre d'automatisation optionnel. Les bouchons de J1 et J2 doivent être laissés en place si le pupitre optionnel n'est pas utilisé. Tout en bas, sous le passage de câbles, sept connecteurs femelles étiquetés B1 à B7 : B1 à B4 pour la connexion de la partie opérative (Malaxeur). B5 à B7 pour le raccordement du pupitre de commande.`,
};
