import React, { PropTypes, Component } from 'react';
import { getInitialOfName } from '../utils/common';
import './character-list.css';

class CharacterList extends Component {

  getColor(index) {
    return this.props.characters[index].color;
  }
 
  renderCharacter(character, index) {
    const initial = getInitialOfName(character.name);
    const listItemStyle = '';
    const hrefClass = `${character.username} ${this.props.activeIndex === index ? 'active': ''}`;

    return (
      <li 
        key={character.id} 
        onClick={this.props.onSelectCharacter.bind(this, {character})}
        style={[listItemStyle.base]}
      >
        <a className={hrefClass}>
          {initial}
          <span>{character.name}</span>
        </a>
      </li>
    );
  }
  
  render() {
    return (
        <nav id="character-list">
          <ul>
            {
              this.props.characters.map(this.renderCharacter.bind(this))
            }        
          </ul>
        </nav>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
}

export default CharacterList;