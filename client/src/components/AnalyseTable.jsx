/* eslint-disable react/prop-types */
import "../assets/styles/analyseTable.css"
import AnalyseRow from "./AnalyseRow";

export default function AnalyseTable({data}) {
  return (
    <div className="table-container">
      <table className="analyse-table">
        <thead>
          <tr>
            <th>Fonction</th>
            <th>Critère d&apos;appréciation</th>
            <th>Niveau d&apos;exigence</th>
            <th>Flexibilité</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <AnalyseRow key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
