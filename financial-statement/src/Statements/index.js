import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTicker, should_Component_Update } from './actions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';

import BalanceSheetTable from './BalanceSheetTable';
import IncomeStatementTable from './IncomeStatementTable';



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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.setTicker((event.target.value));
    this.props.should_Component_Update(true)

  }

  handleSubmit(event) {
    this.props.should_Component_Update(true)
    event.preventDefault();
    console.log(this.props.ticker)
    this.props.setTicker(this.props.ticker)

    console.log(this.props.shouldComponentUpdate)
  }

  // shouldComponentUpdate(){

  //   return this.props.shouldComponentUpdate
  // }
  render(){

    return(
      <AppWrapper>

        <form onSubmit={this.handleSubmit}>
          <label>
              <input style={{height: 33, display: 'inline-block', margin: 10, }} type="text" onChange={this.handleChange} placeholder={"Enter Stock Ticker Here"}/>
          </label>
              <RaisedButton label="Submit" type="submit" value="Submit"/>

        </form>
      <MuiThemeProvider  >{/*this is required to use Material-UI*/}
        <Paper zDepth={2}>{/*Specifies the end of the table*/}
          <Tabs >{/*Creates the tabs of IncomeStatement, Balance Sheet and CashFlows*/}
            <Tab style={{backgroundColor: 'rgb(102,0,0'}} label="Balance Sheet" >{/*Second of Three tabs*/}
              <BalanceSheetTable />
            </Tab>
            <Tab style={{backgroundColor: 'rgb(102,0,0'}} label="Income Statement" >
              <IncomeStatementTable />
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
    ticker: store.ticker,
    shouldComponentUpdate: store.shouldComponentUpdate
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    setTicker: setTicker,
    should_Component_Update: should_Component_Update
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialStatement)





