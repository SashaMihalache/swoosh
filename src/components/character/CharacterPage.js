import React, { Component } from 'react';
import Portrait from './Portrait';
import CharacterList from './CharacterList';

class CharacterPage extends Component {
  render() {
    const mockData = this.props.mockData;
    const charId = this.props.params.characterId ? this.props.params.characterId : mockData.characters[0].username;
    const selectedCharacter = mockData.characters.find(character => character.username === charId);
    return (
      <div>
        <Portrait selectedCharacter={selectedCharacter} />
        <CharacterList characters={mockData.characters} />
      </div>
    );
  }
}

export default CharacterPage;