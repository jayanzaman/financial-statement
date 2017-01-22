import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStatement, setTicker } from './actions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';

import IStable from './IStable';
import BStable from './BStable';



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
    alert('The stock ticker submitted is ' + this.props.ticker);
    event.preventDefault();

  }



  componentWillMount() {
    this.props.fetchStatement(this.props.tenK)
    console.log(this.props.ticker)
  }

  render(){

    return(
      <AppWrapper>
        <form onSubmit={this.handleSubmit}>
          <label>
              <input style={{height: 33, display: 'inline-block', margin: 10, }} type="text" placeholder="Enter Stock Ticker Here" onChange={this.handleChange} />
          </label>
              <RaisedButton label="Submit" type="submit" value="Submit"/>

        </form>
      <MuiThemeProvider >{/*this is required to use Material-UI*/}
        <Paper zDepth={2}>{/*Specifies the end of the table*/}
          <Tabs style={{backgroundColor: '42A5F5'}}>{/*Creates the tabs of IncomeStatement, Balance Sheet and CashFlows*/}
            <Tab label="Income Statement" >{/*First of Three tabs*/}
              <IStable />
            </Tab>
            <Tab label="Balance Sheet" >{/*Second of Three tabs*/}
              <BStable />
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





