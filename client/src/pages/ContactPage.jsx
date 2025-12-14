import { useState } from "react";
import Navbar from "../components/Navbar";

import "../assets/styles/contactPage.css"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour gérer l'envoi du formulaire
    console.log("Message envoyé : ", formData);
    alert("Votre message a été envoyé avec succès !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <h1>Contactez-nous</h1>
        <p>
          Vous avez des questions ou besoin d’un cahier des charges
          personnalisé? Remplissez le formulaire ci-dessous!
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre adresse email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Envoyer
          </button>
        </form>

        <section className="contact-info">
          <h2>Autres moyens de nous contacter</h2>
          <p>
            Email:{" "}
            <a href="mailto:contact@systemhabilis.com">
              contact@systemhabilis.com
            </a>
          </p>
          <p>Téléphone: +216 55 123 456</p>
        </section>
      </div>
    </>
  );
}
