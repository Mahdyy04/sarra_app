export default {
  definition: `Ce pupitre assure les principales fonctions d'automatisme industriel, telles que la commande de la vitesse du malaxeur, la régulation du chauffage, et la gestion du cycle de malaxage avec affichage de la température et des alarmes. Il est préprogrammé avec deux cycles de traitement et deux modes de régulation de température. Le pupitre est alimenté via un câble secteur 230V / 16A pour une connexion au réseau monophasé.`,
  coffretDeCommande: [
    `Un voyant blanc indiquant la présence de la tension générale.`,
    `Un bouton d’arrêt d’urgence « coup de poing » avec clé.`,
    `Un voyant général de « Défaut ».`,
    `Une commande pour l’actionnement du couvercle du malaxeur, avec deux voyants pour indiquer la position du couvercle (ouvert - fermé) et deux boutons poussoirs lumineux à maintien automatique pour l’ouverture et la fermeture.`,
    `Une commande pour l’actionnement du malaxeur, comprenant deux boutons poussoirs pour démarrer et arrêter la pale (« 1 » et « 0 »), un voyant « en service », et un sélecteur à trois positions pour choisir la vitesse de malaxage.`,
    `Une commande pour le chauffage de la cuve du malaxeur, avec un commutateur à deux positions « Marche/Arrêt », un voyant « En service », et un voyant « Régulation » qui s’allume lorsque les résistances sont en chauffe.`,
  ],
};
