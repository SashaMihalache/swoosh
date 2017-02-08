import React, { Component } from 'react';
import Header from './common/layout/Header';
import { mockData } from './utils/mockData';

class App extends Component {
  render() {
    return (
      <div>
        <Header title={mockData.appName} />
        {
           React.cloneElement(this.props.children, {mockData})
        }
      </div>
    );
  }
}

export default App;
