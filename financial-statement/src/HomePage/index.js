import React, { Component } from 'react';
import FinancialStatement from '../Statements/index';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCompany } from './actions';
import { should_Component_Update } from '../Statements/actions';

class HomePage extends Component {




  render() {

    return (
      <MuiThemeProvider>
      <div>
        <AppBar
          style={{backgroundColor: 'rgb(102,0,0'}}
          title="Financial Statement"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <h1>{this.props.company}</h1>
        <FinancialStatement />
        <br />

      </div>
      </MuiThemeProvider>
    );
  }
}


function mapStateToProps(store){
  return {
    tenK: store.tenK,
    company: store.company,
    shouldComponentUpdate: store.shouldComponentUpdate
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    setCompany: setCompany,
    should_Component_Update: should_Component_Update
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
