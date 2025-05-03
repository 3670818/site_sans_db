import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./banner_style.scss"; // Import the style

function Banner() {
  return (
    <>
      <nav className="banner">
        <NavLink to="/" >
          <div className="nom">
            <h1>Ibrahim Allae</h1>
          </div>
        </NavLink>
        <div className="partiedroite">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "banner-link active" : "banner-link"
            }
          >
            <span>Accueil</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "banner-link active" : "banner-link"
            }
          >
            <span>À propos</span>
          </NavLink>

          <NavLink
            to="/competence"
            className={({ isActive }) =>
              isActive ? "banner-link active" : "banner-link"
            }
          >
            <span>Compétences</span>
          </NavLink>

          <NavLink
            to="/projets"
            className={({ isActive }) =>
              isActive ? "banner-link active" : "banner-link"
            }
          >
            <span>Projets</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "banner-link active" : "banner-link"
            }
          >
            <span>Contact</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Banner;
