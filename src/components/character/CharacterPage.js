import React, { Component } from 'react';
import Portrait from './Portrait';
import CharacterList from './CharacterList';
import CharacterZone from './CharacterZone';
import './character-page.css';

class CharacterPage extends Component {
  render() {
    const mockData = this.props.mockData;
    const charId = this.props.params.characterId ? this.props.params.characterId : mockData.characters[0].username;
    const selectedIndex = mockData.characters.findIndex(character => character.username === charId);
    const selectedCharacter = mockData.characters[selectedIndex];
    return (
    <div className="character-page">
        <CharacterList characters={mockData.characters} selectedIndex={selectedIndex} />
        <Portrait selectedCharacter={selectedCharacter} />
        <CharacterZone assignedZone={'fak'} />
      </div>
    );
  }
}

export default CharacterPage;