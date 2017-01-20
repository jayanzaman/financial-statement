import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchStatement } from './actions';

// import injectTapEventPlugin from 'react-tap-event-plugin';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import _ from 'lodash';

class CFtable extends Component {

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
    // console.log(this.props.fetchStatement())
    // console.log(_.get(this.props.fetchStatement(), 'payload[0].balanceSheet[0].cashAndShortTermInvestment'))
    // const sales_0 = _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[0].cashAndShortTermInvestment')
    // console.log(sales_0)

    // return sales_0
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
                <TableHeaderColumn>
                2015
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Net Income'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[0].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Depreciation'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[0].costOfcashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].costOfcashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Share-based compensation expense'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[0].cashAndShortTermInvestment') - _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[0].costOfcashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') - _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].costOfcashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Deferred income tax expense'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Inventories"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Accounts receivable, net'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Selling, general and administrative"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Inventories'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Vendor non-trade receivables'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Other current and non-current assets'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Accounts Payable'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Deferred Revenue'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Other current and non-current liabilities'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Changes in operating assets and liabilities'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Adjustments to reconcile net income to cash generated by operating activities'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Cash generated by operating activities'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Purchases of marketable securities'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[0].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Proceeds from maturities of marketable securities'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[0].costOfcashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].costOfcashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Proceeds from sales of marketable securities'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[0].cashAndShortTermInvestment') - _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[0].costOfcashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') - _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].costOfcashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Payments made in connection with business acquisitions, net'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Inventories"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Payments for acquisition of property, plant and equipment'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Selling, general and administrative"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Payments for acquisition of intangible assets'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Payments for strategic investments'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Other'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Cash used in investing activities'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Proceeds from issuance of common stock'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Excess tax benefits from equity awards'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Payments for taxes related to net share settlement of equity awards'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label='Payments for dividends and dividend equivalents'
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label="Repurchases of common stock"
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label="Proceeds from issuance of long-term debt, net"
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label="Repayments of term debt"
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label="Change in commercial paper, net"
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label="Cash generated by (used in) financing activities"
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label="Increase (decrease) in cash and cash equivalents"
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label="Cash and cash equivalents, beginning of the year"
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <FlatButton
                    label="Cash and cash equivalents, end of the year"
                    onTouchTap={this.handleOpen}
                    />
                  <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                  >
                    Only actions can close this dialog.
                  </Dialog>
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
                <TableRowColumn>
                  { _.get(this.props.fetchStatement(), 'payload[0].balanceSheet[1].cashAndShortTermInvestment') }
                </TableRowColumn>
              </TableRow>

            </TableBody>


          </Table>
      </div>
    )
  }
}

function mapStateToProp(store){
  return {
    tenK: store.tenK
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchStatement: fetchStatement}, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProps)(CFtable)

