import Navbar from "../components/Navbar";
import "../assets/styles/aboutPage.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <h1>À propos de nous</h1>
        <section className="team-section">
          <h2>Notre équipe</h2>
          <p>
            Nous sommes un groupe de quatre amis passionnés par la technologie
            et le développement de systèmes innovants. Notre équipe est composée
            de:
          </p>
          <ul>
            <li>
              <strong>Hamza Rezgui</strong>
            </li>
            <li>
              <strong>Seddik Debbabi</strong>
            </li>
            <li>
              <strong>Aziz Moualhi</strong>
            </li>
            <li>
              <strong>Hachem Meddeb</strong>
            </li>
          </ul>
          <p>
            Nous étudions en 3ème année IMI à l&apos;INSAT (2024/2025), avec
            l&apos;ambition de créer des solutions utiles et performantes.
          </p>
        </section>

        <section className="project-section">
          <h2>Notre projet</h2>
          <p>
            Ce projet a été réalisé dans le cadre de nos études. Nous avons
            travaillé sur le cahier des charges du système Habilis, avec deux
            fonctionnalités principales:
          </p>
          <ul>
            <li>Lire et analyser un cahier des charges existant.</li>
            <li>
              Créer un cahier des charges personnalisé adapté aux besoins
              spécifiques d&apos;un client.
            </li>
          </ul>
        </section>

        <section className="contact-section">
          <h2>Contactez-nous</h2>
          <p>
            Si vous souhaitez en savoir plus ou créer un cahier des charges
            personnalisé, n&apos;hésitez pas à nous{" "}
            <a href="/contact">contacter</a>.
          </p>
        </section>
      </div>
    </>
  );
}
