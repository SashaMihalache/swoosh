import React from 'react';

const CharacterDetails = ({character}) => {
  return (
    <div>
      <h2 className="title">{character.name}</h2>
    </div>
  );
};

export default CharacterDetails;