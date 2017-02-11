import React, { Component } from 'react';
import './portrait.css';

class Portrait extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div className="portrait">
        <h2 className="title">{this.props.selectedCharacter.name}</h2>
        <object 
          id={this.props.selectedCharacter.username}
          className="svg-holder avatar"
          data={this.props.selectedCharacter.svgURL} 
          type="image/svg+xml">
        </object>
        
      </div>
    );

  }
}

export default Portrait;