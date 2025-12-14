import Navigation from "../../components/Navigation";
import malaxeurImage from "../../assets/images/malaxeur indus.png";
import imagePage14 from "../../assets/images/image page 14.png";
import imagePage15 from "../../assets/images/image page 15.png";
import imagePage16 from "../../assets/images/image page 16.png";
import imagePage17_1 from "../../assets/images/image page 17 1.png";
import imagePage17_2 from "../../assets/images/image page 17 2.png";
import TextArea from "../../components/TextArea"
import malaxeurData from "../../data/presentation/malaxeurData";

export default function Malaxeur() {
  return (
    <section className="presentation-section">

      <TextArea
        title="Malaxeur Industriel (partie opérative):"
        text={malaxeurData.definition}
        image={malaxeurImage}
        imageInRight={true}
      />
      <TextArea
        text={malaxeurData.informations.page14}
        image={imagePage14}
        imageInRight={false}
      />
      <TextArea
        text={malaxeurData.informations.page15}
        image={imagePage15}
        imageInRight={true}
      />
      <TextArea
        text={malaxeurData.informations.page16}
        image={imagePage16}
        imageInRight={false}
      />
      <TextArea
        title="L’appareil inclut également:"
        text={malaxeurData.inclutEgalement[0]}
        image={imagePage17_1}
        imageInRight={true}
      />
      <TextArea
        text={malaxeurData.inclutEgalement[1]}
        image={imagePage17_2}
        imageInRight={false}
      />
      <Navigation
        links={{
          next: {
            path: "/dashboard/presentation/pupitre",
            title: "Pupitre d'automatisme",
          },
          previous: {
            path: "/dashboard/presentation/armoire",
            title: "Armoire de puissance",
          },
        }}
      />
    </section>
  );
}
