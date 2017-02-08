import React from 'react';
import './character-zone.css';

const CharacterZone = ({assignedZone}) => {
  return (
    <div className="character-zone">
      Assigned To : <span>{assignedZone}</span>
    </div>
  );
};

export default CharacterZone;