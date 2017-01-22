import React, { Component } from 'react';
import FinancialStatement from '../Statements/index';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class HomePage extends Component {




  render() {

    return (
      <MuiThemeProvider>
      <div>
        <AppBar

          title="Financial Statement"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <FinancialStatement />
        <br />
        <AppBar

          showMenuIconButton={false}
        />
      </div>
      </MuiThemeProvider>
    );
  }
}


export default HomePage;
