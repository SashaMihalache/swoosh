import React, { Component } from 'react';
import Portrait from './Portrait';
import CharacterList from './CharacterList';
import CharacterZone from './CharacterZone';
import { getCalculatedAssignedZone, getWeekNumber } from '../utils/datesCalculator';
import { morphPictures } from '../utils/polygorithm';
import './character-page.css';

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
      currentWeekNr,
    };
  }

  calculateAssignedZone(charIndex, currWeek) {
    return getCalculatedAssignedZone(charIndex, currWeek, this.props.mockData.zones);
  }

  onSelectCharacter({character}) {
    const index = this.props.mockData.characters.findIndex(c => c === character);
    if(index !== this.state.activeIndex) {
      const selectedCharacter = this.props.mockData.characters[index];
      const assignedZone = this.calculateAssignedZone(index, this.state.currentWeekNr);

      this.getNextCharacterPortrait(selectedCharacter)
        .then((data) => {
          morphPictures(selectedCharacter.username, data)
            .then((to) => {
              this.setState({
                selectedCharacter,
                activeIndex: index,
                assignedZone,
                fromPolygonArray: to,
                toPolygonArray: data
              });
          })

        })
        .catch(() => {})
    }
  }
  
  componentWillMount() {
    this.getNextCharacterPortrait(this.state.selectedCharacter)
      .then((data) => {
        this.setState({
          fromPolygonArray: data
        });
      });
  }

  getNextCharacterPortrait(selectedCharacter) {

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", selectedCharacter.svgURL, true);
      xhr.overrideMimeType("image/svg+xml");
      xhr.send("");
      xhr.onload = () => resolve(xhr.responseXML.documentElement);
      xhr.onerror = (error) =>reject(error);
    });
  }
  
  render() {
    return (
      <div className="character-page">
          <div className="left-section">
            <CharacterList 
              characters={this.props.mockData.characters} 
              activeIndex={this.state.activeIndex} 
              onSelectCharacter={this.onSelectCharacter}
            />
          </div>
          
          <div className="right-section">
          
            <div className="appearance">
              <Portrait selectedCharacter={this.state.selectedCharacter} />
              <div className="description">
                <div className="description_content">
                  {this.state.selectedCharacter.name}
                </div>
              </div>
            </div>

            <CharacterZone 
              assignedZone={this.state.assignedZone} 
              weekNr={this.state.currentWeekNr} 
              color={this.state.selectedCharacter.color} 
            />
          </div>
      </div>
    );
  }
}

export default CharacterPage;