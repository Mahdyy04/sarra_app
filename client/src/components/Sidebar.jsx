/* eslint-disable react/prop-types */
import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import "../assets/styles/sidebar.css";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";

function SidebarMenu({ title, toggleMenu, isOpen, links, pageLink }) {
  return (
    <li className="sidebar-menu">
      <NavLink
        className={({ isActive }) => {
          return isActive ? "active" : "";
        }}
        to={pageLink}
        onClick={toggleMenu}
      >
        {title}
        {isOpen ? (
          <BsChevronDown className="chevron" />
        ) : (
          <BsChevronRight className="chevron" />
        )}
      </NavLink>
      {isOpen && (
        <ul className="sidebar-menu-links">
          {links.map((link) => {
            return (
              <li key={link.label}>
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? "active" : "";
                  }}
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

function SidebarLink({ link }) {
  return (
    <li
      className="sidebar-link"
      id={link.path === "/dashboard/generer" && "generer-btn"}
    >
      <NavLink
        to={link.path}
        className={({ isActive }) => {
          return isActive ? "active" : "";
        }}
      >
        {link.label}
      </NavLink>
    </li>
  );
}

export default function Sidebar() {
  const [openPresentation, setOpenPresentation] = useState(false);
  const [openCahier, setOpenCahier] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setRole(storedData.role);
    }
  }, []);

  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <SidebarLink
          link={{ path: "/dashboard/introduction", label: "Introduction" }}
        />
        <SidebarMenu
          title="Presentation"
          toggleMenu={() => {
            setOpenCahier(false);
            setOpenPresentation(!openPresentation);
          }}
          isOpen={openPresentation}
          links={[
            {
              path: "/dashboard/presentation/armoire",
              label: "Armoire de puissance",
            },
            {
              path: "/dashboard/presentation/malaxeur",
              label: "Malaxeur industriel",
            },
            {
              path: "/dashboard/presentation/pupitre",
              label: "Pupitre d'automatisme",
            },
          ]}
          pageLink="/dashboard/presentation"
        />
        <SidebarMenu
          title="Cahier de charge"
          toggleMenu={() => {
            setOpenPresentation(false);
            setOpenCahier(!openCahier);
          }}
          isOpen={openCahier}
          links={[
            {
              path: "/dashboard/cahier/analyse",
              label: "Analyse fonctionnelle",
            },
            { path: "/dashboard/cahier/fast", label: "Diagramme FAST" },
            {
              path: "/dashboard/cahier/chaine",
              label: "Les chaines",
            },
            {
              path: "/dashboard/cahier/sadt",
              label: "Analyse SADT",
            },
          ]}
          pageLink="/dashboard/cahier"
        />
        {role === "client" && (
          <SidebarLink
            link={{ path: "/dashboard/generer", label: "Générer une Cahier" }}
          />
        )}
      </ul>
    </div>
  );
}
