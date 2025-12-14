/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 12,
    position: "relative",
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  section: {
    marginBottom: 60,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
  value: {
    marginLeft: 20,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    fontStyle: "italic",
  },
});

const PDFFile = ({ cahierData, clientData }) => {

  function getDate() {
    const today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    return `${day}/${month}/${year}`;
  }

  return (
    <Document>
      {/* Page 1 */}
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Cahier des Charges de Système Habilis</Text>
        </View>

        {/* Client Details Section */}
        <View style={styles.section}>
          <Text style={styles.title}>Détails du Client</Text>
          <Text style={styles.label}>Nom du Client :</Text>
          <Text style={styles.value}>{clientData.nom} {clientData.prenom}</Text>
          <Text style={styles.label}>Nom de l'Entreprise :</Text>
          <Text style={styles.value}>{clientData.entreprise}</Text>
          <Text style={styles.label}>Email du Client :</Text>
          <Text style={styles.value}>{clientData.email}</Text>
          <Text style={styles.label}>Numéro de Téléphone :</Text>
          <Text style={styles.value}>{clientData.phone}</Text>
          <Text style={styles.label}>Date de Confirmation :</Text>
          <Text style={styles.value}>{getDate()}</Text>
        </View>

        {/* Project Details Section */}
        <View style={styles.section}>
          <Text style={styles.title}>Détails du Projet</Text>
          <Text style={styles.label}>Objectif:</Text>
          <Text style={styles.value}>{cahierData.objectifs}</Text>
          <Text style={styles.label}>Description:</Text>
          {Array.isArray(cahierData.description) && 
            cahierData.description.map((line, index) => (
              <Text key={index} style={styles.value}>{line}</Text>
            ))}
          <Text style={styles.label}>Marché Cible:</Text>
          <Text style={styles.value}>{cahierData.marcheCible}</Text>
          <Text style={styles.label}>Bénéficiaires:</Text>
          {Array.isArray(cahierData.beneficiaires) && 
            cahierData.beneficiaires.map((line, index) => (
              <Text key={index} style={styles.value}>{line}</Text>
            ))}
          <Text style={styles.label}>Contraintes:</Text>
          {Array.isArray(cahierData.contraintes) &&
            cahierData.contraintes.map((line, index) => (
              <Text key={index} style={styles.value}>{line}</Text>
            ))}
        </View>

        {/* Footer for Page 1 */}
        <Text style={styles.footer}>Page 1</Text>
      </Page>

      {/* Page 2 */}
      <Page size="A4" style={styles.page}>
        {/* Conditions d'Environnements Section */}
        <View style={styles.section}>
          <Text style={styles.title}>Conditions d'Environnements</Text>
          <Text style={styles.label}>Alimentation:</Text>
          <Text style={styles.value}>{cahierData.alimentation}</Text>
          <Text style={styles.label}>Puissance:</Text>
          <Text style={styles.value}>{cahierData.puissance}</Text>
          <Text style={styles.label}>Branchement:</Text>
          <Text style={styles.value}>{cahierData.branchement}</Text>
          <Text style={styles.label}>Courant de court-circuit:</Text>
          <Text style={styles.value}>{cahierData.courtCircuit}</Text>
          <Text style={styles.label}>Tension de tenue assignée:</Text>
          <Text style={styles.value}>{cahierData.tension}</Text>
          <Text style={styles.label}>Classe de protection:</Text>
          <Text style={styles.value}>{cahierData.protection}</Text>
          <Text style={styles.label}>Température - Utilisation:</Text>
          <Text style={styles.value}>{cahierData.temperatureUtilisation}</Text>
          <Text style={styles.label}>Température - Stockage:</Text>
          <Text style={styles.value}>{cahierData.temperatureStockage}</Text>
          <Text style={styles.label}>Hygrométrie - Utilisation:</Text>
          <Text style={styles.value}>{cahierData.hygrometrieUtilisation}</Text>
          <Text style={styles.label}>Hygrométrie - Stockage:</Text>
          <Text style={styles.value}>{cahierData.hygrometrieStockage}</Text>
          <Text style={styles.label}>Altitude:</Text>
          <Text style={styles.value}>{cahierData.altitude}</Text>
          <Text style={styles.label}>Pollution:</Text>
          <Text style={styles.value}>{cahierData.pollution}</Text>
          <Text style={styles.label}>Bruit:</Text>
          <Text style={styles.value}>{cahierData.bruit}</Text>
        </View>

        {/* Footer for Page 2 */}
        <Text style={styles.footer}>Page 2</Text>
      </Page>
    </Document>
  );
};

export default PDFFile;
