import React, { Component } from 'react';
import './portrait.css';

class Portrait extends Component {
  render() {
    return (
      <div className="portrait">
        <h2 className="title">{this.props.selectedCharacter.name}</h2>
        <object 
          className="avatar"
          data={this.props.selectedCharacter.svgURL} 
          type="image/svg+xml">
        </object>
      </div>
    );
  }
}

export default Portrait;