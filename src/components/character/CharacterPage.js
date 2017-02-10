import React, { Component } from 'react';
import Portrait from './Portrait';
import CharacterList from './CharacterList';
import CharacterZone from './CharacterZone';
import './character-page.css';

class CharacterPage extends Component {

  constructor(props) {
    super(props);
    this.onSelectCharacter = this.onSelectCharacter.bind(this);
    const mockData = this.props.mockData;
    const charId = this.props.params.characterId ? this.props.params.characterId : mockData.characters[0].username;
    const selectedIndex = mockData.characters.findIndex(character => character.username === charId);

    this.state = {
      selectedCharacter: mockData.characters[selectedIndex],
      activeIndex: selectedIndex
    };
  }

  onSelectCharacter({character}) {
    const index = this.props.mockData.characters.findIndex(c => c === character);
    if(index !== this.state.activeIndex) {
      this.setState({
        selectedCharacter: this.props.mockData.characters[index],
        activeIndex: index
      });
    }
  }
  
  render() {

    return (
      <div className="character-page">
        <CharacterList 
          characters={this.props.mockData.characters} 
          activeIndex={this.state.activeIndex} 
          onSelectCharacter={this.onSelectCharacter}
        />
        
        <Portrait 
          selectedCharacter={this.state.selectedCharacter} 
        />

        <CharacterZone assignedZone={'fak'} />
      </div>
    );
  }
}

export default CharacterPage;