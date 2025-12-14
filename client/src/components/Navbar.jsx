/* eslint-disable react/prop-types */
import "../assets/styles/navbar.css";
import { Link,useNavigate } from "react-router";

export default function Navbar({ page }) {
  const navigate = useNavigate()
  
  function handleLogOut() {
    localStorage.removeItem("userData");
  }

  function handleClick(){
    navigate("/home")
  }

  return (
    <nav className="navbar">
      <h1 className="logo" onClick={handleClick}>CahierPro</h1>
      <div className="nav-links">
        {page === "home" ? (
          <Link to="/dashboard/introduction">Tableau de bord</Link>
        ) : (
          <Link to="/home">Acceuil</Link>
        )}
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/" onClick={handleLogOut}>
        Déconnexion
        </Link>
      </div>
    </nav>
  );
}
