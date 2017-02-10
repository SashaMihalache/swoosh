import React, { Component } from 'react';
import Portrait from './Portrait';
import CharacterList from './CharacterList';
import CharacterZone from './CharacterZone';
import './character-page.css';
import {getCalculatedAssignedZone, getWeekNumber} from '../utils/datesCalculator';

class CharacterPage extends Component {

  constructor(props) {
    super(props);
    this.onSelectCharacter = this.onSelectCharacter.bind(this);
    const mockData = this.props.mockData;
    const charId = this.props.params.characterId ? this.props.params.characterId : mockData.characters[0].username;
    const activeIndex = mockData.characters.findIndex(character => character.username === charId);
    const currentWeekNr = getWeekNumber(new Date());
    
    this.state = {
      selectedCharacter: mockData.characters[activeIndex],
      assignedZone: this.calculateAssignedZone(activeIndex, currentWeekNr),
      activeIndex,
      currentWeekNr
    };
  }

  calculateAssignedZone(charIndex, currWeek) {
    return getCalculatedAssignedZone(charIndex, currWeek, this.props.mockData.zones);
  }

  onSelectCharacter({character}) {
    const index = this.props.mockData.characters.findIndex(c => c === character);
    if(index !== this.state.activeIndex) {
      const assignedZone = this.calculateAssignedZone(index, this.state.currentWeekNr);
      this.setState({
        selectedCharacter: this.props.mockData.characters[index],
        activeIndex: index,
        assignedZone
      });
    }
  }
  
  render() {
    const backgroundColor = {backgroundColor: this.state.selectedCharacter.color };
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

        <CharacterZone assignedZone={this.state.assignedZone} weekNr={this.state.currentWeekNr} color={this.state.selectedCharacter.color} />
        <div id="bg" style={backgroundColor}></div>
      </div>
    );
  }
}

export default CharacterPage;