import React, { PropTypes, Component } from 'react';
import { getInitialOfName } from '../utils/common';
import { Link } from 'react-router';
import './character-list.css';
import Radium from 'radium';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: this.props.selectedIndex || 0
    };
    this.renderCharacter = this.renderCharacter.bind(this);
  }

  getColor(index) {
    return this.props.characters[index].color;
  }

  setActiveItem(index) {
    if(index !== this.state.activeIndex) {
      this.setState({
        activeIndex: index
      });
    }
  }
  
  renderCharacter(character, index) {
    const initial = getInitialOfName(character.name);
    const listItemStyle = {
      base: {
        ':hover':  {
          background: character.color,
        }
      }
    };
    const activeItem = index === this.state.activeIndex ? 'active' : '';

    return (
      <li 
        key={character.id} 
        onClick={this.setActiveItem.bind(this, index)} 
        style={[listItemStyle.base]}
      >
        <Link 
          to={character.username} 
          className={activeItem}
        >
          {initial}
          <span>{character.name}</span>
        </Link>
      </li>
    );
  }
  
  render() {
    const backgroundStyle= {
      background: this.getColor(this.state.activeIndex)
    };

    return (
        <nav id="character-list">
          <ul>
            {
              this.props.characters.map(this.renderCharacter)
            }        
          </ul>
          <div className="bg" style={backgroundStyle}></div>
        </nav>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
}

CharacterList = Radium(CharacterList);

export default CharacterList;