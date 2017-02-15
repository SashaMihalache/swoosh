import React, { Component } from 'react';
import Header from './common/layout/Header';
import Footer from './common/layout/Footer';
import { mockData } from './utils/mockData';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <Header title={mockData.appName} />
          {
            React.cloneElement(this.props.children, {mockData})
          }
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
