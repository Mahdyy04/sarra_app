import { useState } from "react";
import { useNavigate } from "react-router";

import "../../assets/styles/clientLogin.css";

export default function ClientLogin() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    adresse: "",
    email: "",
    phone: "",
    entreprise: "",
    role:"client"  
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
    <div className="client-login">
      <h2>Client Login</h2>
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
          Adresse:
          <input
            type="text"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            required
          />
        </label>
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
          Téléphone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nom de l&apos;entreprise:
          <input
            type="text"
            name="entreprise"
            value={formData.entreprise}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Se Connecter</button>
      </form>
    </div>
  );
}
