import Card from "../../components/Card";
import AnalyseFonctionnelleTabelImage from "../../assets/images/anaylse fonctionnelle.png";
import DiagrammeFastImage from "../../assets/images/diagramme fast.jpg";
import ChaineInfoEnergie from "../../assets/images/chaine information energie.jpg";
import analyseSADTImage from "../../assets/images/sadt.png";
import "../../assets/styles/cahierDeChargePage.css";

export default function CahierDeChargePage() {
  return (
    <div className="cahierDeCharge">
      <Card
        link="/dashboard/cahier/analyse"
        img={{
          src: AnalyseFonctionnelleTabelImage,
          alt: "Analyse fonctionnelle",
        }}
      />
      <Card
        link="/dashboard/cahier/fast"
        img={{
          src: DiagrammeFastImage,
          alt: "Diagramme FAST",
        }}
      />
      <Card
        link="/dashboard/cahier/chaine"
        img={{
          src: ChaineInfoEnergie,
          alt: "Chaines d'info et d'énergie",
        }}
      />
      <Card
        link="/dashboard/cahier/sadt"
        img={{
          src: analyseSADTImage,
          alt: "Analyse SADT",
        }}
      />
    </div>
  );
}
