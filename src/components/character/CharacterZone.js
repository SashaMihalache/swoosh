import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import './character-zone.css';

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
      },
      chip: {
        margin: 4
      },
    };

  }
  renderedChores(chores) {
    return chores.map((chore, index) =>
      <li 
        key={index}
        className="chip"
      >
        {chore}
      </li>
    );
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value
    });
  }

  render() {
    // const backgroundColor = { backgroundColor: this.props.color };
    return (
      <div className="character-zone">
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
          
          <div className="zone">
            {/*TODO: REFACTOR THIS*/}
            <div className="appearance">
              <img className="image" src={this.props.assignedZone.imageURL} alt="" />
              <div className="description">
                <div className="description_content">
                  <strong>{this.props.assignedZone.name} </strong>
                  <br/>
                  <div className="details">
                    You have been assigned to this zone <br/>
                    Week Nr. {this.props.weekNr}
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div style={this.styles.slide} className="chores">
            <div className="wrapper">
              {this.renderedChores(this.props.assignedZone.chores)}
            </div>
          </div>
        </SwipeableViews>
      </div>
    )

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