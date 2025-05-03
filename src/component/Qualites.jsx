// 



import React from 'react';
import './qualite_style.scss';
import qualitesData from './qualites.json';

function Qualites() {
  return (
    <div className="lignefiltre-icon">
      <div className="icon">
        <div className="tel-filtre">
          {qualitesData.slice(0, 2).map((item, index) => (
            <div className="filtre" key={index}>
              <i className={item.icon}></i>
              <h4>{item.label}</h4>
            </div>
          ))}
        </div>

        <div className="filtre">
          <i className={qualitesData[2].icon}></i>
          <h4>{qualitesData[2].label}</h4>
        </div>
      </div>
    </div>
  );
}

export default Qualites;
