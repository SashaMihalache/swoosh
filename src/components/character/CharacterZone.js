import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
// import './character-zone.css';

class CharacterZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };

    this.styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400
      },
      slide: {
        padding: 10
      }
    };

  }
  renderedChores(chores) {
    chores.map((chore, index) =>
      <li key={index} className="chores-list-item">{chore}</li>
    );
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value
    });
  }

  // const
  // return (
  //   <div className="character-container">
  //     <div className="character-zone">
  //       <header className="header" style={backgroundColor}>{assignedZone.name}</header>
  //       <section className="zone-section">
  //         <img src={assignedZone.imageURL} alt="fak" className="zone-image"/>
  //       </section>
  //         <footer className="chores" style={backgroundColor}>
  //           <div className="chores-title">Chores for week {weekNr}</div>
  //           <ul className="chores-list">
  //             {renderedChores}
  //           </ul>
  //         </footer>
  //     </div>
  //   </div>
  // );

  render() {
    // const backgroundColor = { backgroundColor: this.props.color };
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          >
          <Tab label="Zone" value={0} />
          <Tab label="Chores" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          >
          <div>
            <h2 style={this.styles.headline}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
          </div>
          <div style={this.styles.slide}>
            slide n°2
          </div>
        </SwipeableViews>
      </div>
    )


    // return (
    //   <div className="character-container">
    //     <div className="character-zone">
    //       <header className="header" style={backgroundColor}>{this.props.assignedZone.name}</header>
    //       <section className="zone-section">
    //         <img src={this.props.assignedZone.imageURL} alt="fak" className="zone-image"/>
    //       </section>
    //         <footer className="chores" style={backgroundColor}>
    //           <div className="chores-title">Chores for week {this.props.weekNr}</div>
    //           <ul className="chores-list">
    //             {this.renderedChores(this.props.assignedZone.chores)}
    //           </ul>
    //         </footer>
    //     </div>
    //   </div>
    // );
  }
};

CharacterZone.propTypes = {
  assignedZone: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    chores: PropTypes.array.isRequired
  }),
  weekNr: PropTypes.number.isRequired
}

export default CharacterZone;