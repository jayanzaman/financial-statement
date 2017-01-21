import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStatement, fetchBalanceSheet, setBalanceSheetObj, setBalanceSheetTable } from './actions';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import _ from 'lodash';

class BStable extends Component {
  constructor(props){
    super(props)
    this.state = {
      balanceSheetTable: props.balanceSheetTable,
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

    console.log(this.props.balanceSheetObj)

    let balanceSheetObj;//captures the object with data from the API call
    this.props.fetchBalanceSheet().then((data) => {
      balanceSheetObj = data.payload.data[0]

      this.props.setBalanceSheetObj(balanceSheetObj);
        this.setState({
          balanceSheetObj: balanceSheetObj
        })
        console.log(this.props.balanceSheetObj)
    let arrayOfBalanceSheetItems = [];//pushes the each item in the object into this array
    for (let key in balanceSheetObj){
      if(typeof balanceSheetObj === 'object'){
          let item = {
            name: key,
            value: balanceSheetObj[key]
          }
            arrayOfBalanceSheetItems.push(item)
        }
      }
      console.log(arrayOfBalanceSheetItems);
 let content;//it will contain the table rows generated
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
    setBalanceSheetTable(content)
    console.log(content)
    this.setState({
      balanceSheetTable: content
    })
    console.log(this.props.balanceSheetTable)

    })

  };

shouldComponentUpdate(prevProps, nextProps){
  return true
}


  render(){
    console.log(this.props.balanceSheetTable)
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
 {/* { content }*/}
            </TableBody>
          </Table>
      </div>
    )


  }

}

function mapStateToProp(store){
  return {
    tenK: store.tenK,
    balanceSheetObj: store.balanceSheetObj,
    balanceSheetTable: store.balanceSheetTable
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

