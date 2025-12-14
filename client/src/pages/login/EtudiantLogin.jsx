import { useState } from "react";
import { useNavigate } from "react-router"; 

import "../../assets/styles/etudiantLogin.css"

export default function EtudiantLogin() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    faculte: "",
    role:"etudiant"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData)); // Store the full data in localStorage
    navigate("/home"); // Redirect to home page
  };

  return (
    <div className="etudiant-login">
      <h2>Etudiant Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label>
            Nom:
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Prénom:
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nom du faculté:
          <input
            type="text"
            name="faculte"
            value={formData.faculte}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Se Connecter</button>
      </form>
    </div>
  );
}
