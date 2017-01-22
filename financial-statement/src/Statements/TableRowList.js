import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStatement, fetchBalanceSheet, setBalanceSheetObj, setBalanceSheetTable } from './actions';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import _ from 'lodash';

class TableRowList extends Component {
  constructor(props){
    super(props)
    this.state = {
      balanceSheetTable: [],
      open: false
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  componentDidMount() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    let balanceSheetObj;//captures the object with data from the API call
    this.props.fetchBalanceSheet().then((data) => {
      balanceSheetObj = data.payload.data[0]

    if(Object.keys(balanceSheetObj).length){

    const content = Object.keys(balanceSheetObj).map((item, index) => (
        <TableRow key={`${item}-${index}`}>
          <TableRowColumn>
            <FlatButton
              label={item}
              onTouchTap={this.handleOpen}
            />
            <Dialog
              title={item}
              actions={actions}
              modal={true}
              open={this.state.open}
            >
              Only actions can close this dialog.
            </Dialog>
          </TableRowColumn>
          <TableRowColumn>
              {balanceSheetObj[item]}
          </TableRowColumn>
        </TableRow>
      ));
        setBalanceSheetTable(content)
        console.log(content)
        this.setState({
          balanceSheetTable: content
        })
      }
    })//end of promise function

  };

  render(){

    console.log(this.props.ticker)
    return(
      { this.state.balanceSheetTable }
    )
  }

}

function mapStateToProp(store){
  return {
    tenK: store.tenK,
    balanceSheetObj: store.balanceSheetObj,
    balanceSheetTable: store.balanceSheetTable,
    ticker: store.ticker
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchStatement: fetchStatement,
    fetchBalanceSheet: fetchBalanceSheet,
    setBalanceSheetObj: setBalanceSheetObj

  }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProps)(TableRowList)

