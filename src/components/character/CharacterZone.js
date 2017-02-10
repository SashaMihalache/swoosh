import React, { PropTypes } from 'react';
import './character-zone.css';

const CharacterZone = ({assignedZone, weekNr, color}) => {
  const renderedChores = assignedZone.chores.map((chore, index) => 
    <li key={index} className="chores-list-item">{chore}</li> 
  );

  const backgroundColor = { backgroundColor: color };

  return (
    <div className="character-container">
      <div className="character-zone">
        <header className="header" style={backgroundColor}>{assignedZone.name}</header>
        <section className="zone-section">
          <img src={assignedZone.imageURL} alt="fak" className="zone-image"/>
        </section>
          <footer className="chores" style={backgroundColor}>
            <div className="chores-title">Chores for week {weekNr}</div>
            <ul className="chores-list">
              {renderedChores}
            </ul>
          </footer>
      </div>
    </div>
  );
};

CharacterZone.propTypes = {
  assignedZone: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    chores: PropTypes.array.isRequired
  }),
  weekNr: PropTypes.number.isRequired
}

export default CharacterZone;