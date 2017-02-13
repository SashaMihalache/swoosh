import React, { PropTypes, Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import './character-list.css';

class CharacterList extends Component {

  getColor(index) {
    return this.props.characters[index].color;
  }
 
  renderCharacter(character, index) {
    const letterAvatar = (
      <Avatar 
        src={character.pictureURL}
        size={40}
      />
    );

    let fontWeigth;
    
    if(this.props.activeIndex === index) {
      fontWeigth = {'fontWeight': '700'};
    }
    else {
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