import React, { Component } from 'react';
import './portrait.css';

class Portrait extends Component {
  render() {
    return (
      <div className="portrait">
        <h2 className="title">{this.props.selectedCharacter.name}</h2>
        <img className="avatar" src={this.props.selectedCharacter.pictureURL} alt="fak"/>
        <section className="assigned-zone">
          fak
        </section>
      </div>
    );
  }
}

export default Portrait;