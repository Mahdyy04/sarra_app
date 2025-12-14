import Card from "../../components/Card";
import "../../assets/styles/presentation.css";
import ArmoireImage from "../../assets/images/armoire de puissance.jpg";
import MalaxeurImage from "../../assets/images/malaxeur indus.png";
import PupitreImage from "../../assets/images/pupitre d'automatisme.jpg";

export default function PresentationPage() {
  return (
    <div className="presentation">
      <Card
        link="/dashboard/presentation/armoire"
        img={{
          src: ArmoireImage,
          alt: "Armoire de puissance",
        }}
      />
      <Card
        link="/dashboard/presentation/malaxeur"
        img={{
          src: MalaxeurImage,
          alt: "Malaxeur industriel",
        }}
      />
      <Card
        link="/dashboard/presentation/pupitre"
        img={{
          src: PupitreImage,
          alt: "Pupitre d'automatisme",
        }}
      />
    </div>
  );
}
