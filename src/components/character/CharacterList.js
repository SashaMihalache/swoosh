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

    let style;
    let activeClass;
    if(this.props.activeIndex === index) {
      style = {'fontWeight': '700', 'color': '#fff'};
      activeClass = 'resizable-text active';
    }
    else {
      style = {'fontWeight': '400', 'color': '#fff'};
      activeClass = 'resizable-text ';
    }
    
    return (
      <div key={character.id} >
        <ListItem
          className={activeClass}
          style={style}
          onTouchTap={this.props.onSelectCharacter.bind(this, {character})}
          primaryText={character.name}
          leftAvatar={letterAvatar}
          secondaryTextLines={2}
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