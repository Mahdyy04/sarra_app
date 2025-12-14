/* eslint-disable react/prop-types */
const AnalyseRow = ({ row }) => {
  return (
    <>
      {/* Main row with "fonction" and the first sub-row */}
      <tr>
        <td className="fonction" rowSpan={row.critereAppreciation.length}>{row.fonction}</td>
        <td>{row.critereAppreciation[0]}</td>
        <td>{row.niveauExigence[0]}</td>
        <td>{row.flexibilite[0]}</td>
      </tr>
      {/* Remaining sub-rows */}
      {row.critereAppreciation.slice(1).map((critere, index) => (
        <tr key={index}>
          <td>{critere}</td>
          <td>{row.niveauExigence[index + 1]}</td>
          <td>{row.flexibilite[index + 1]}</td>
        </tr>
      ))}
    </>
  );
};

export default AnalyseRow;
