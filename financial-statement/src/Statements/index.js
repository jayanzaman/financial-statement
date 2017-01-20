import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStatement, setTicker } from './actions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';


import IStable from './IStable';
import BStable from './BStable';
import CFtable from './CFtable';


  const AppWrapper = styled.div`
    max-width: calc(768px + 16px * 2);
    margin: 0 auto;
    display: flex;
    min-height: 100%;
    padding: 0 16px;
    flex-direction: column;
  `;

class FinancialStatement extends Component {

  constructor(props) {
    super(props);
    // this.state = {ticker: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.setTicker((event.target.value));
    console.log(this.props.ticker)
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.props.ticker);
    event.preventDefault();

  }



  componentWillMount() {
    this.props.fetchStatement(this.props.tenK)
  }





  render(){

    return(
      <AppWrapper>
        <form onSubmit={this.handleSubmit}>
          <label>
              <span>Stock Ticker:</span>
              <input type="text"  onChange={this.handleChange} />
          </label>
              <input type="submit" value="Submit" />
        </form>
        <p>Financial Statement 10K</p>
      <MuiThemeProvider>{/*this is required to use Material-UI*/}
        <Paper zDepth={2}>{/*Specifies the end of the table*/}
          <Tabs>{/*Creates the tabs of IncomeStatement, Balance Sheet and CashFlows*/}
            <Tab label="Income Statement" >{/*First of Three tabs*/}
              <IStable />
            </Tab>
            <Tab label="Balance Sheet" >{/*Second of Three tabs*/}
              <BStable />
            </Tab>
            <Tab label="Cash Flow" >{/*Third of Three tabs*/}
              <CFtable />
            </Tab>
          </Tabs>
        </Paper>
      </MuiThemeProvider>
      </AppWrapper>
    )//end of return
  }//end of render
}

function mapStateToProps(store){
  return {
    tenK: store.tenK,
    ticker: store.ticker
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchStatement: fetchStatement,
    setTicker: setTicker
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialStatement)





