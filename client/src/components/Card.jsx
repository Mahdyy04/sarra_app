/* eslint-disable react/prop-types */
import { Link } from "react-router";
import "../assets/styles/card.css";

export default function Card({ link, img }) {
  return (
    <div className="card">
      <div className="img-container">
        <Link to={link}>
          <img src={img.src} alt={img.alt} />
        </Link>
      </div>
      <Link to={link} className="button">
        {img.alt}
      </Link>
    </div>
  );
}
