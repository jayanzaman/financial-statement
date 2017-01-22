import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStatement } from './actions';
import { fetchIncomeStatement } from './actions';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import _ from 'lodash';






class IStable extends Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
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

    console.log(this.props.ticker)
    Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};


 const incStateLast = this.props.fetchStatement().payload[0].incomeStatement[0]

 const arrayOfTableItems = [];
     for (let key in incStateLast){
  if(typeof incStateLast === 'object'){
      let item = {
        name: [key],
        value: incStateLast[key]}
      arrayOfTableItems.push(item)
     }
   }
 let content;

if (typeof arrayOfTableItems === "object"){
 content = arrayOfTableItems.map((item, index) => (
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
            />

      </TableRowColumn>
      <TableRowColumn>
          {item.value.format(2)}
      </TableRowColumn>
      </TableRow>
  ));
}


    return(
      <div>
        <Table selectable={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow >
                <TableHeaderColumn>
                In Millions of USD
                </TableHeaderColumn>
                <TableHeaderColumn>
                2016
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} >
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
    ticker: store.ticker
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchStatement: fetchStatement,
    fetchIncomeStatement: fetchIncomeStatement
  }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProps)(IStable)


