export default {
  definition: `C’ est un modèle de malaxeur industriel à échelle réduite. Les éléments fonctionnels sont intégrés par des profilés aluminium et protections plastique, avec pieds réglables pour mise à niveau.`,
  informations: {
    page14: `L’appareil est construit autour d’une cuve avec contrôle de température, ayant un diamètre de 240 mm et une profondeur de 170 mm.
    Le couvercle de la cuve est actionné par un motoréducteur triphasé alimenté en 230/400 V et d'une puissance de 0,09 kW, muni d’un limiteur de couple pré-réglé en usine. Le mécanisme comprend des butées avec des interrupteurs de fin de course mécaniques ajustables.`,
    page15: `Le mélange est réalisé à l’aide d’une pale mise en rotation par un moteur triphasé de 230/400 V et de puissance 0,09 kW. La position de la pale permettant l’ouverture du couvercle est détectée par un capteur inductif.
    La cuve est équipée d’une trappe de remplissage et d’une trappe de vidange, ainsi que d’une cellule photoélectrique pour détecter le niveau maximal de matériau.
    Pour le matériau, utiliser uniquement des granulés secs, grossiers, insolubles et résistants jusqu’à 50°C. Ne pas introduire dans la cuve des liquides, des poudres fines ou des matières ayant un point de fusion inférieur à 50°C.`,
    page16: `La base de la cuve est chauffée par un ensemble de trois résistances à ailettes, montées en étoile, chacune ayant une puissance de 250 W. La température de ces résistances est contrôlée par un thermostat, réglable depuis la façade avant. En cas de défaillance du système de régulation, un dispositif de sécurité à rupture thermique, calibré à 80°C et réarmable manuellement, déclenche le disjoncteur principal de l’armoire.
    Une sonde de température PT100 est installée dans la cuve pour mesurer la température du matériau, et elle est destinée à être utilisée par l’automate optionnel.`,
  },
  inclutEgalement: [
    `Un système de protection pour les utilisateurs, composé de capots en plastique transparent, équipé d’une détection d’intrusion.`,
    `Des commandes et signalisations locales :   un bouton d’arrêt d’urgence « coup de poing », un indicateur de présence de tension de secours, un voyant de présence de chauffage, un témoin indiquant que le niveau maximal n’est pas atteint, ainsi que des commandes manuelles pour l’ouverture et la fermeture du couvercle.`,
  ],
};
