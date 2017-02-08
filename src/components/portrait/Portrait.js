import React, { Component } from 'react';
import { mockData } from '../utils/mockData';
import './portrait.css';

class Portrait extends Component {

  componentWillMount() {
    
    console.log(this.selectedCharacter);
  }
  render() {
    this.mockData = mockData;
    const charId = this.props.params.characterId ? this.props.params.characterId : mockData.characters[0].username;
    const selectedCharacter = this.mockData.characters.find(character => character.username === charId);
    return (
      <div className="portrait">
        <h2 className="title">{selectedCharacter.name}</h2>
        <img className="avatar" src={selectedCharacter.pictureURL} alt="fak"/>
        <section className="assigned-zone">
          fak
        </section>
      </div>
    );
  }
}

export default Portrait;