import React from 'react';
import './character-zone.css';

const CharacterZone = ({assignedZone}) => {
  return (
    <div className="character-container">
      <div className="character-zone">
        <header className="header">Bathroom</header>
        <section className="zone-section">
          <img src="/images/jpg/zones/bathroom.jpg" alt="" className="zone-image"/>
        </section>
          <footer className="chores">
            <div className="chores-title">Chores</div>
            <ul className="chores-list">
              <li className="chores-list-item">Aragaz</li>
              <li className="chores-list-item">Podea</li>
              <li className="chores-list-item">Masa</li>
              <li className="chores-list-item">Chiuveta</li>
              <li className="chores-list-item">Chiuveta</li>
            </ul>
          </footer>
      </div>
    </div>
  );
};

export default CharacterZone;