import Navigation from "../../components/Navigation";
import TextArea from "../../components/TextArea";
import pupitreData from "../../data/presentation/pupitreData";
import pupitreImage from "../../assets/images/pupitre d'automatisme.jpg";
import coffretDeCommande from "../../assets/images/coffret de commande.jpg";
import "../../assets/styles/pupitre.css";

export default function Pupitre() {
  return (
    <section className="presentation-section">
      <TextArea
        title="Pupitre d'automatisme:"
        text={pupitreData.definition}
        image={pupitreImage}
        imageInRight={true}
      />
      <div className="coffret-container">
        <img src={coffretDeCommande} alt="coffret de commande" />
        <ul>
          <h1>Coffret de commande:</h1>
          {pupitreData.coffretDeCommande.map((info, index) => {
            return <li key={index}>- {info}</li>;
          })}
        </ul>
      </div>
      <Navigation
        links={{
          previous: {
            path: "/dashboard/presentation/malaxeur",
            title: "Malaxeur industriel",
          },
        }}
      />
    </section>
  );
}
