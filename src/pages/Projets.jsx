import React, { useState } from "react";
import "./projets_style.scss";
import bookiImage from "../assets/booki_image.PNG";
import ninaImage from "../assets/nina.PNG";
import grimoireImage from "../assets/grimoire2.PNG";
import sophieImage from "../assets/sophhie2.PNG";
import Popup from '../component/popup';

function Projets() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      id: 1,
      title: "Booki",
      img: bookiImage,
      alt: "Capture d'écran du projet Booki, une plateforme de réservation",
      paragraphe: "Ce projet a pour but d'intégrer la maquette de la page d'accueil d'un site de location d'hébergements de vacances nommé Booki.",
      contenu_popup: "https://github.com/3670818/html",
      contenu_popup1: "https://3670818.github.io/html/"
    },
    {
      id: 2,
      title: "Nina Carducci",
      img: ninaImage,
      alt: "Capture d'écran du portfolio Nina Carducci",
      paragraphe: "Ce projet est le portfolio en ligne de Nina Carducci, une photographe basée à Bordeaux. Il a été amélioré pour assurer une meilleure accessibilité, des performances optimisées et un bon référencement SEO.",
      contenu_popup: "https://github.com/3670818/projet4_nina_carducci/tree/main/Nina-Carducci-Dev",
      contenu_popup1: "https://3670818.github.io/Nina-Carducci-Dev/"
    
    },
    {
      id: 3,
      title: "Mon vieux grimoire",
      img: grimoireImage,
      alt: "Capture d'écran de l'application Mon vieux grimoire",
      paragraphe: "Ce projet a pour but d'intégrer le backend du site Gestion des livres : ajout, mise à jour et suppression de livres. Notation des livres : possibilité de noter les livres. Authentification : inscription et connexion des utilisateurs.",
      contenu_popup: "https://github.com/3670818/p6_le_vieux_grimoire"
    },
    {
      id: 4,
      title: "Sophie Bluel",
      img: sophieImage,
      alt: "Capture d'écran du portfolio Sophie Bluel",
      paragraphe: "Projet 3 parcours développeur web openclassrooms Implémenter les fonctionnalités dynamiques pour le site de l'architecte Sophie Bluel. Utilisation de JS natif, aucun framework. Backend fourni avec swagger.",
      contenu_popup: "https://github.com/3670818/projet3",
      contenu_popup1: "https://3670818.github.io/projet3/"
    }
  ];

  return (
    <div className="activités-a-marseille">
      <section className="acti">
        <h2 className="section-title2" id="activité">Mes Projets</h2>
        <span className="sous-titre-projets"> Quelques exemples de réalisations effectuées durant la formation</span>
        <div className="hebergements-cards2">
          {projects.map((project) => (
            <div key={project.id}>
              <a href="#" onClick={() => openPopup(project)}>
                <article className="card2">
                  <img src={project.img} alt={project.alt} />
                  <div className="card-content1">
                    <div className="card-txt-activité-marseille">
                      <h3 className="card-title-activite">{project.title}</h3>
                    </div>
                  </div>
                </article>
              </a>
            </div>
          ))}
        </div>
        {selectedProject && (
          <Popup show={showPopup} onClose={closePopup}>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.img} alt={selectedProject.alt} />
            <p>{selectedProject.paragraphe}</p>
            <a href={selectedProject.contenu_popup} target="_blank" rel="noopener noreferrer">lien git</a>
             {/* Afficher le lien du site seulement s'il existe */}
             {selectedProject.contenu_popup1 && (
            <a href={selectedProject.contenu_popup1} target="_blank" rel="noopener noreferrer">lien du site</a>
            )}
          </Popup>
        )}
      </section>
    </div>
  );
}

export default Projets;
