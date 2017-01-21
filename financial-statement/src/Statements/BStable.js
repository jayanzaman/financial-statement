import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStatement, fetchBalanceSheet, setBalanceSheetObj } from './actions';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import _ from 'lodash';

class BStable extends Component {


  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  componentWillMount() {
    console.log(this.props.balanceSheetObj)

    let balanceSheetObj;//captures the object with data from the API call
    this.props.fetchBalanceSheet().then((data) => {
      balanceSheetObj = data.payload.data[0]

      this.props.fetchBalanceSheet();

      this.props.setBalanceSheetObj(balanceSheetObj);
        this.setState({
          balanceSheetObj: balanceSheetObj
        })

    })
      console.log(balanceSheetObj)
  };

  render(){
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
    let arrayOfBalanceSheetItems = [];//pushes the each item in the object into this array

    let content;//it will contain the table rows generated

    this.props.fetchBalanceSheet().then((data) =>
    {
      balanceSheetObj = data.payload.data[0]
      console.log(balanceSheetObj)
        })
    console.log(balanceSheetObj)
    for (let key in balanceSheetObj){
      if(typeof balanceSheetObj === 'object'){
          let item = {
            name: key,
            value: balanceSheetObj[key]
          }
            arrayOfBalanceSheetItems.push(item)
        }
      }
      // console.log(arrayOfBalanceSheetItems);

    if(typeof arrayOfBalanceSheetItems === "object"){

      content = arrayOfBalanceSheetItems.map((item, index) => (
        <TableRow key={`${item.name}-${index}`}>
          <TableRowColumn>
            <FlatButton
              label={item.name}
              onTouchTap={this.handleOpen}
            />
            <Dialog
              title={item.name}
              actions={actions}
              modal={true}
              open={this.state.open}
            >
              Only actions can close this dialog.
            </Dialog>
          </TableRowColumn>
          <TableRowColumn>
              {item.value}
          </TableRowColumn>
        </TableRow>
      ));
    }








    // console.log(content)
    return(
      <div>
        <Table selectable={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
                <TableHeaderColumn>
                In Millions of USD
                </TableHeaderColumn>
                <TableHeaderColumn>
                2016
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
            { content }
            </TableBody>
          </Table>
      </div>
    )


  }

}

function mapStateToProp(store){
  return {
    tenK: store.tenK,
    balanceSheetObj: store.balanceSheetObj
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchStatement: fetchStatement,
    fetchBalanceSheet: fetchBalanceSheet,
    setBalanceSheetObj: setBalanceSheetObj
  }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProps)(BStable)

