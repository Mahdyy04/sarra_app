/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import { Link } from "react-router";
import { useEffect, useState } from "react";

import CahierIllustration from "../assets/images/cahier illustration.svg";

import "../assets/styles/homePage.css";

export default function HomePage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.prenom) {
      setName(
        `${storedData.prenom.charAt(0).toUpperCase()}${storedData.prenom.slice(
          1
        )}`
      );
      setRole(storedData.role);
    }
  }, []);

  return (
    <>
      <Navbar page="home" />
      <main className="home-container">
        <section className="hero-section">
          <h1>Bienvenue, {name}!</h1>
          <p>
            Commencez à explorer notre plateforme pour en savoir plus sur les{" "}
            <span>systèmes habilis</span> ou{" "}
            <span>créer votre propre cahier de charge fonctionnelle !</span>
          </p>
          <div className="buttons-container">
            <Link to="/dashboard/introduction">Découvrir plus</Link>
            <Link
              to="/dashboard/generer"
              id={role === "etudiant" && "generer-btn"}
            >
              Créer votre CCF{" "}
              <span>{role === "etudiant" && "(seul client)"}</span>
            </Link>
          </div>
        </section>

        <section className="about-section">
          <h2>Qu&apos;est-ce qu&apos;un Cahier de Charge Fonctionnelle ?</h2>
          <div className="about">
            <p>
              Un cahier de charge fonctionnelle est un document qui définit les
              objectifs, caractéristiques et contraintes d'un projet. Pour un
              système habilis, il décrit les objectifs pédagogiques, les
              spécifications techniques et les marchés cibles, servant de plan
              pour atteindre les résultats souhaités.
            </p>
            <img
              src={CahierIllustration}
              alt="illustration de cahier de charge"
            />
          </div>
        </section>

        <section className="benefits-section">
          <h2>Pourquoi choisir le Système Habilis ?</h2>
          <div className="benefits-card-container">
            <div className="benefit-card">
              <h4>Automatiser les Processus</h4>
              <p>
                Réduire l'intervention humaine en automatisant les tâches
                répétitives et critiques.
              </p>
            </div>
            <div className="benefit-card">
              <h4>Optimiser la Maintenance</h4>
              <p>
                Implémenter une maintenance prédictive pour réduire les pannes
                et les coûts associés.
              </p>
            </div>
            <div className="benefit-card">
              <h4>Améliorer l'Efficacité</h4>
              <p>
                Accroître la productivité des équipements grâce à une meilleure
                supervision et contrôle.
              </p>
            </div>
          </div>
          <div className="buttons-container">
            <Link to="/dashboard/introduction">Découvrir plus</Link>
            <Link
              to="/dashboard/generer"
              id={role === "etudiant" && "generer-btn"}
            >
              Créer votre CCF{" "}
              <span>{role === "etudiant" && "(seul client)"}</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
