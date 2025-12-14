import { BsBackpack2, BsBriefcase } from "react-icons/bs";
import { useNavigate } from "react-router";
import "../../assets/styles/loginChoice.css";

export default function LoginChoice() {
  const navigate = useNavigate();

  return (
    <section className="login-choice-section">
      <h1>Vous êtes:</h1>
      <div className="choice-card">
        <div
          className="card"
          onClick={() =>
            navigate("/login/etudiant", { state: { role: "etudiant" } })
          }
        >
          <BsBackpack2 size={150} className="icon" />
          <span>Etudiant</span>
        </div>
        <div className="card" onClick={() => navigate("/login/client")}>
          <BsBriefcase size={150} className="icon" />
          <span>Client</span>
        </div>
      </div>
    </section>
  );
}
