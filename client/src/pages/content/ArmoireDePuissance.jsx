import armoireDePuissanceData from "../../data/presentation/armoireDePuissanceData";
import armoireImage from "../../assets/images/armoire de puissance.jpg";
import aGaucheImage from "../../assets/images/a gauche.png";
import auCentreImage from "../../assets/images/au centre.png";
import aDroiteImage1 from "../../assets/images/a droite.png";
import aDroiteImage2 from "../../assets/images/prise de courant simple.png";
import partieSuperieur from "../../assets/images/partie superieur de l'armoire.jpg";
import liaisonImage from "../../assets/images/liaisons avec exterieur.png";
import Navigation from "../../components/Navigation";
import TextArea from "../../components/TextArea";

export default function ArmoireDePuissance() {
  return (
    <section className="presentation-section">
      <TextArea
        title="Armoire de puissance:"
        text={armoireDePuissanceData.definition}
        image={armoireImage}
        imageInRight={true}
      />
      <TextArea
        title="A gauche:"
        text={armoireDePuissanceData.aGauche}
        image={aGaucheImage}
        imageInRight={false}
      />
      <TextArea
        title="Au centre:"
        text={armoireDePuissanceData.auCentre}
        image={auCentreImage}
        imageInRight={true}
      />
      <TextArea
        title="A droite:"
        text={armoireDePuissanceData.aDroite.partie1}
        image={aDroiteImage1}
        imageInRight={false}
      />
      <TextArea
        text={armoireDePuissanceData.aDroite.partie2}
        image={aDroiteImage2}
        imageInRight={true}
      />
      <TextArea
        title="La partie supérieure de l'armoire contient:"
        text={armoireDePuissanceData.partieSuperieur}
        image={partieSuperieur}
        imageInRight={false}
      />
      <TextArea
        title="Les liaisons avec l’extérieur incluent :"
        text={armoireDePuissanceData.liaisonsAvecExterieur}
        image={liaisonImage}
        imageInRight={true}
      />
      <Navigation
        links={{
          next: {
            path: "/dashboard/presentation/malaxeur",
            title: "Malaxeur industriel",
          },
        }}
      />
    </section>
  );
}
