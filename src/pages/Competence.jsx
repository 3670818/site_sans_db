// import React from 'react';
// import './competence_style.scss';
// import '../component/descriptionpanel_style.scss';
// import { DescriptionPanel } from '../component/DescriptionPanel';
// import cv from '../assets/CV.jpg'; // Importez l'image
// import MATLAB from '../assets/matlab1.png'; // Importez l'image
// import mongoDB from '../assets/db1.png'; // Importez l'image


// const CVLink = () => {
//   return (
//     <a href={cv} target="_blank" rel="noopener noreferrer">
//       <img src={cv} alt="CV" className="cv" />
//       <h3 className="telecharger">Télécharger CV</h3>
//     </a>
//   );
// };

// const Competence = () => {
//   return (
//     <>
//       <div className="tableau">
//         <div className="lignefiltre-icon">
//           <h3 id="competence">Compétences</h3>
//           <div className="icon">
//             <div className="grid-container">
//               <div className="filtre">
//                 <i className="fa-brands fa-html5"></i>
//                 <h4>HTML</h4>
//               </div>
//               <div className="filtre">
//                 <i className="fa-brands fa-js"></i>
//                 <h4>Javascript</h4>
//               </div>
//               <div className="filtre">
//                 <i className="fa-brands fa-node-js"></i>
//                 <h4>Node.js</h4>
//               </div>
//               <div className="filtre">
//                 <i className="fa-solid fa-file-code"></i>
//                 <h4>CSS</h4>
//               </div>
//               <div className="filtre">
//                 <i className="fa-solid fa-f"></i>
//                 <h4>Fortran</h4>
//               </div>
//               <div className="filtre-matlab">
//               <img src={MATLAB} alt={"logo de MATLAB"} />
//                 <h4>MATLAB</h4>
//               </div>
//               <div className="filtre">
//               <i class="fa-brands fa-node"></i>
//                 <h4>Node</h4>
//               </div>
//               <div className="filtre-matlab">
//               <i class="fa-brands fa-envira"></i>
//                 <h4>mongoDB</h4>
//               </div>
//             </div>
//           </div>
//         </div>
//         <CVLink />
//       </div>
//     </>
//   );
// };

// export default Competence;




import React from 'react';
import './competence_style.scss';
import '../component/descriptionpanel_style.scss';
import { DescriptionPanel } from '../component/DescriptionPanel';
import cv from '../assets/CV.jpg';
import MATLAB from '../assets/matlab1.png';
import mongoDB from '../assets/db1.png';
import competences from './competences.json'; // Chargement des données JSON

const imageMap = {
  matlab: MATLAB,
  mongoDB: mongoDB
};

const CVLink = () => {
  return (
    <a href={cv} target="_blank" rel="noopener noreferrer">
      <img src={cv} alt="CV" className="cv" />
      <h3 className="telecharger">Télécharger CV</h3>
    </a>
  );
};

const Competence = () => {
  return (
    <div className="tableau">
      <div className="lignefiltre-icon">
        <h3 id="competence">Compétences</h3>
        <div className="icon">
          <div className="grid-container">
            {competences.map((item, index) => (
              <div
                className={item.type === 'image' ? 'filtre-matlab' : 'filtre'}
                key={index}
              >
                {item.type === 'icon' ? (
                  <i className={item.icon}></i>
                ) : (
                  <img src={imageMap[item.image]} alt={`logo de ${item.label}`} />
                )}
                <h4>{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CVLink />
    </div>
  );
};

export default Competence;
