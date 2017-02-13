import React, { PropTypes, Component } from 'react';
import { getInitialOfName } from '../utils/common';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { pinkA200 } from 'material-ui/styles/colors';
import ActionGrade from 'material-ui/svg-icons/action/label';
import './character-list.css';

class CharacterList extends Component {

  getColor(index) {
    return this.props.characters[index].color;
  }
 
  renderCharacter(character, index) {
    const initial = getInitialOfName(character.name);
    
    const letterAvatar = (
      <Avatar 
        backgroundColor={character.color}
        size={40}>
          {initial.toUpperCase()}
      </Avatar>
    );

    let selectedIcon;
    let fontWeigth;
    
    if(this.props.activeIndex === index) {
      selectedIcon = <ActionGrade color={pinkA200} />;
      fontWeigth = {'fontWeight': '700'};
    }
    else {
      selectedIcon = null;
      fontWeigth = {'fontWeight': '400'};
    }

    return (
      <div key={character.id} >
        <ListItem
          style={fontWeigth}
          onTouchTap={this.props.onSelectCharacter.bind(this, {character})}
          primaryText={character.name}
          leftAvatar={letterAvatar}
          secondaryTextLines={1}
        > 
        </ListItem>
        <Divider />
      </div>
    );
  }
  
  render() {
    return (
      <List className="character-list">
          {
            this.props.characters.map(this.renderCharacter.bind(this))
          }        
      </List>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
}

export default CharacterList;