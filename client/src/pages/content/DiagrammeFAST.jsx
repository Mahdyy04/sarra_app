import Navigation from "../../components/Navigation";
import TreeChart from "../../components/TreeChart";
import "../../assets/styles/diagrammeFAST.css";
import diagrammeFastData from "../../data/cahier de charge/diagrammeFastData";

export default function DiagrammeFAST() {
  return (
    <section className="cahier-section">
      {diagrammeFastData.map((data, index) => {
        return <TreeChart key={index} treeData={data} />;
      })}
      <Navigation
        links={{
          next: {
            path: "/dashboard/cahier/chaine",
            title: "Les chaines d'info et d'énergie",
          },
          previous: {
            path: "/dashboard/cahier/analyse",
            title: "Analyse fontionnelle",
          },
        }}
      />
    </section>
  );
}
