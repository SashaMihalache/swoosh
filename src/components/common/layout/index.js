import React, { Component } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import { mockData } from '../../utils/mockData';
import './layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.appName = mockData.appname;
    this.characterList = mockData.characters;
  }
  
  render() {
    return (
      <div>
        <Header title={this.appName} />
        <SideBar characters={this.characterList} />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
