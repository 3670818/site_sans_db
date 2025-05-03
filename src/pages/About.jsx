import React from "react";
import "./about_style.scss"; // Assurez-vous que ce fichier existe
import profileImage from "../assets/image2.jpg"; // Corrigé pour une image
import Porto from "../component/porto.jsx"; // Assurez-vous du chemin correct
import Qualites from "../component/Qualites.jsx";

function About() {
  return (
    <div className="about-page">
      <div className="a_propos">
        <img src={profileImage} alt="Photo de profil" className="profile-image" />
      </div>
      <div className="partie2">
      <Qualites/>
      <Porto />
      </div>
    </div>
  );
}

export default About;









