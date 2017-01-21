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
          style={{backgroundColor: '#42A5F5'}}
          title="Financial Statement"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <FinancialStatement />
        <br />
        <AppBar
          style={{backgroundColor: '#42A5F5'}}
          showMenuIconButton={false}
        />
      </div>
      </MuiThemeProvider>
    );
  }
}


export default HomePage;
