import React, { PropTypes, Component } from 'react';
import { getInitialOfName } from '../../utils/common';
import { Link } from 'react-router';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.renderCharacter = this.renderCharacter.bind(this);
  }

  getColor(index) {
    return this.props.characters[index].color;
  }

  setActiveItem(index) {
    this.setState({
      activeIndex: index
    });
  }
  
  renderCharacter(character, index) {
    const initial = getInitialOfName(character.name);
    const listItemStyle = { background: character.color };

    return (
      <li className="list-item" key={character.id} onClick={this.setActiveItem.bind(this, index)} >
        <Link to={character.username} style={listItemStyle}>
          {initial}
        </Link>
      </li>
    );
  }
  
  render() {
    const backgroundStyle= {
      background: this.getColor(this.state.activeIndex)
    };

    return (
        <div className="menu">
          <ul>
            {
              this.props.characters.map(this.renderCharacter)
            }        
          </ul>
          <div className="bg" style={backgroundStyle}></div>
        </div>
    );
  }
}

SideBar.propTypes = {
  characters: PropTypes.array.isRequired
}

export default SideBar;