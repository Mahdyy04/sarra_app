/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router";
import "../../assets/styles/genereCahier.css";

function ConfirmModal({ showModal, onConfirm, onCancel }) {
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Voulez-vous confirmer ?</p>
        <button onClick={onConfirm}>Confirmer</button>
        <button onClick={onCancel}>Annuler</button>
      </div>
    </div>
  );
}

export default function GenereCahier() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    objectifs: "",
    description: [],
    marcheCible: "",
    beneficiaires: [],
    contraintes: [],
    alimentation: "",
    puissance: "",
    branchement: "",
    courtCircuit: "",
    tension: "",
    protection: "",
    // ddr: "",
    temperatureUtilisation: "",
    temperatureStockage: "",
    hygrometrieUtilisation: "",
    hygrometrieStockage: "",
    altitude: "",
    pollution: "",
    bruit: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirm = () => {
    console.log("Form Data Submitted:", formData);
    localStorage.setItem("cahierData", JSON.stringify(formData));
    setFormData({
      objectifs: "",
      description: [],
      marcheCible: "",
      beneficiaires: [],
      contraintes: [],
      alimentation: "",
      puissance: "",
      branchement: "",
      courtCircuit: "",
      tension: "",
      protection: "",
      // ddr: "",
      temperatureUtilisation: "",
      temperatureStockage: "",
      hygrometrieUtilisation: "",
      hygrometrieStockage: "",
      altitude: "",
      pollution: "",
      bruit: "",
    });
    setShowModal(false); // Close modal after confirm
    navigate("/dashboard/generer/pdf");
  };

  const handleCancel = () => {
    setShowModal(false); // Close modal if canceled
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form Data Submitted: ", formData);
  //     alert("do you want to confirm ?");
  //     setFormData({
  //       objectifs: "",
  //       description: [],
  //       marcheCible: "",
  //       beneficiaires: [],
  //       contraintes: [],
  //       alimentation: "",
  //       puissance: "",
  //       branchement: "",
  //       courtCircuit: "",
  //       tension: "",
  //       protection: "",
  //       ddr: "",
  //       temperatureUtilisation: "",
  //       temperatureStockage: "",
  //       hygrometrieUtilisation: "",
  //       hygrometrieStockage: "",
  //       altitude: "",
  //       pollution: "",
  //       bruit: "",
  //     });
  //   };

  return (
    <>
      <div className="generer-cahier">
        <h1>Générer Cahier des Charges</h1>
        <form onSubmit={handleSubmit} className="generer-form">
          {/* Objectifs */}
          <div className="form-group">
            <label>Objectifs:</label>
            <div className="radio-group">
              {[
                "Automatisation des Processus",
                "Optimisation de la Maintenance",
                "Amélioration de l'Efficacité",
                "Sécurité",
                "Fiabilité",
                "Adaptabilité",
                "Réduction des Coûts",
                "Conformité",
                "Innovation Technologique",
              ].map((objective, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="objectifs"
                    value={objective}
                    checked={formData.objectifs === objective}
                    onChange={handleInputChange}
                  />
                  {objective}
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description:</label>
            <div className="checkbox-group">
              {[
                "Réalisation de travaux pratiques liés aux habilitations électriques.",
                "Étude de systèmes industriels incluant départs-moteurs, variation de vitesse, et capteurs/actionneurs.",
                "Analyse des problèmes liés aux consignations sur systèmes industriels avec énergie secourue.",
                "Maintenance dans les armoires électriques (réglage, paramétrage, et diagnostic).",
                "Étude des systèmes automatisés (automatisme séquentiel, régulation, dialogue opérateur).",
              ].map((desc, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    name="description"
                    value={desc}
                    checked={formData.description.includes(desc)}
                    onChange={handleInputChange}
                  />
                  {desc}
                </label>
              ))}
            </div>
          </div>

          {/* Marché Cible */}
          <div className="form-group">
            <label>Marché Cible:</label>
            <div className="radio-group">
              {[
                "Industries manufacturières: Amélioration de l’efficacité et des processus.",
                "Institutions éducatives: Intégration dans les écoles techniques et universités.",
                "Centres de formation professionnelle: Développement des compétences techniques.",
                "Autre: Adapté à tout environnement nécessitant de telles solutions.",
              ].map((marche, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="marcheCible"
                    value={marche}
                    checked={formData.marcheCible === marche}
                    onChange={handleInputChange}
                  />
                  {marche}
                </label>
              ))}
            </div>
          </div>

          {/* Bénéficiaires */}
          <div className="form-group">
            <label>Bénéficiaires:</label>
            <div className="checkbox-group">
              {[
                "Responsables RH: Gestion des habilitations et des formations.",
                "Administrateurs Systèmes: Suivi des accès réseau et outils.",
                "Utilisateurs Finaux: Accès simplifié aux informations sur les habilitations.",
                "Autre: Personnalisation selon les besoins spécifiques.",
              ].map((beneficiaire, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    name="beneficiaires"
                    value={beneficiaire}
                    checked={formData.beneficiaires.includes(beneficiaire)}
                    onChange={handleInputChange}
                  />
                  {beneficiaire}
                </label>
              ))}
            </div>
          </div>

          {/* Contraintes */}
          <div className="form-group">
            <label>Contraintes:</label>
            <div className="checkbox-group">
              {[
                "Compatibilité avec les systèmes existants.",
                "Gestion d’utilisateurs multiples en simultané.",
                "Sécurité des accès et gestion des rôles.",
                "Notifications automatiques pour expiration des habilitations.",
                "Formation des administrateurs et utilisateurs.",
                "Respect des délais et mise à jour régulière.",
              ].map((contrainte, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    name="contraintes"
                    value={contrainte}
                    checked={formData.contraintes.includes(contrainte)}
                    onChange={handleInputChange}
                  />
                  {contrainte}
                </label>
              ))}
            </div>
          </div>
          <h2>Conditions d&apos;Environnements</h2>
          <div className="form-group">
            <label>Alimentation:</label>
            <select
              name="alimentation"
              value={formData.alimentation} // Bind to formData
              onChange={handleInputChange} // Use the existing handler
            >
              <option value="">--</option>
              <option value="400V triphasé avec neutre et terre">
                400V triphasé avec neutre et terre
              </option>
              <option value="230V monophasé avec neutre et terre">
                230V monophasé avec neutre et terre
              </option>
            </select>
          </div>

          {/* Puissance */}
          <div className="form-group">
            <label>Puissance:</label>
            <select
              name="puissance"
              value={formData.puissance}
              onChange={handleInputChange}
            >
              <option value="">--</option>
              <option value=">= 1kVA">≥ 1kVA</option>
              <option value=">= 5kVA">≥ 5kVA</option>
              <option value=">= 10kVA">≥ 10kVA</option>
            </select>
          </div>

          {/* Branchement */}
          <div className="form-group">
            <label>Branchement:</label>
            <select
              name="branchement"
              value={formData.branchement}
              onChange={handleInputChange}
            >
              <option value="">--</option>
              <option value="Prise de courant 3P + N + T / 16 A, type P17">
                Prise de courant 3P + N + T / 16 A, type P17
              </option>
              <option value="Raccordement direct">Raccordement direct</option>
            </select>
          </div>

          {/* Courant de court-circuit */}
          <div className="form-group">
            <label>Courant de court-circuit:</label>
            <select
              name="courtCircuit"
              value={formData.courtCircuit}
              onChange={handleInputChange}
            >
              <option value="">--</option>
              <option value="10 A">10 A</option>
              <option value="16 A">16 A</option>
              <option value="32 A">32 A</option>
            </select>
          </div>

          {/* Tension de tenue assignée */}
          <div className="form-group">
            <label>Tension de tenue assignée:</label>
            <select
              name="tension"
              value={formData.tension}
              onChange={handleInputChange}
            >
              <option value="">--</option>
              <option value="2,5 kV">2,5 kV</option>
              <option value="4 kV">4 kV</option>
            </select>
          </div>

          {/* Classe de protection */}
          <div className="form-group">
            <label>Classe de protection:</label>
            <select
              name="protection"
              value={formData.protection}
              onChange={handleInputChange}
            >
              <option value="">--</option>
              <option value="Classe I">Classe I</option>
              <option value="Classe II">Classe II</option>
            </select>
          </div>

          {/* DDR */}
          {/* <div className="form-group"> */}
          {/* <label>DDR:</label>
          <select name="ddr" value={formData.ddr} onChange={handleInputChange}>
          <option value="">--</option>
          <option value="Sensibilité ≤ 30 mA de classe AC">
          Sensibilité ≤ 30 mA de classe AC
          </option>
          <option value="Sensibilité ≤ 10 mA de classe A">
          Sensibilité ≤ 10 mA de classe A
          </option>
          </select> */}
          {/* </div> */}

          {/* Températures */}
          <div className="form-group">
            <label>Température - Utilisation:</label>
            <select
              name="temperatureUtilisation"
              value={formData.temperatureUtilisation}
              onChange={handleInputChange}
            >
              <option value="">--</option>
              <option value="T <= 5 °C">T ≤ + 5 °C</option>
              <option value="5 °C < T <= + 40 °C">
                5 °C {"<"} T ≤ + 40 °C
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Température - Stockage:</label>
            <select
              name="temperatureStockage"
              value={formData.temperatureStockage}
              onChange={handleInputChange}
            >
              <option value="">--</option>
              <option value="- 25 °C < T <= + 55 °C">
                - 25 °C {"<"} T ≤ + 55 °C
              </option>
            </select>
          </div>

          {/* Hygrométrie */}
          <div className="form-group">
            <label>Hygrométrie - Utilisation:</label>
            <select
              name="hygrometrieUtilisation"
              value={formData.hygrometrieUtilisation}
              onChange={handleInputChange}
            >
              <option value="">--</option>
              <option value="HR < 50% pour T = + 40 °C">
                HR {"<"} 50% pour T = + 40 °C
              </option>
            </select>
          </div>
          <div className="form-group">
            <label>Hygrométrie - Stockage:</label>
            <select
              name="hygrometrieStockage"
              value={formData.hygrometrieStockage}
              onChange={handleInputChange}
            >
              <option value="">--</option>
              <option value="HR < 90% pour T = + 20 °C">
                HR {"<"} 90% pour T = + 20 °C
              </option>
            </select>
          </div>

          {/* Altitude */}
          <div className="form-group">
            <label>Altitude:</label>
            <select
              name="altitude"
              value={formData.altitude}
              onChange={handleInputChange}
            >
              <option value="">--</option>
              <option value="1m < Altitude <= 2m">
                1m {"<"} Altitude ≤ 2m
              </option>
              <option value="Altitude < 1m">Altitude {"<"} 1m</option>
            </select>
          </div>

          {/* Pollution */}
          <div className="form-group">
            <label>Pollution:</label>
            <select
              name="pollution"
              value={formData.pollution}
              onChange={handleInputChange}
            >
              <option value="">--</option>
              <option value="Pollution sèche non conductrice">
                Pollution sèche non conductrice
              </option>
              <option value="Pollution humide conductrice">
                Pollution humide conductrice
              </option>
            </select>
          </div>

          {/* Bruit */}
          <div className="form-group">
            <label>Bruit:</label>
            <select
              name="bruit"
              value={formData.bruit}
              onChange={handleInputChange}
            >
              <option value="">--</option>
              <option value="< 70 dB">Inférieur à 70 décibels</option>
              <option value="< 60 dB">Inférieur à 60 décibels</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Générer
          </button>
        </form>

        <ConfirmModal
          showModal={showModal}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </div>
    </>
  );
}
