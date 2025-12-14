import data from "../../data/cahier de charge/analyseFonctionelleData";
import "../../assets/styles/analyseTable.css";
import AnalyseTable from "../../components/AnalyseTable";
import Navigation from "../../components/Navigation";
export default function AnalyseFonctionnelle() {
  return (
    <section className="cahier-section">
      <AnalyseTable data={data} />
      <Navigation
        links={{
          next: {
            path: "/dashboard/cahier/fast",
            title: "Diagramme FAST",
          },
        }}
      />
    </section>
  );
}
