import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBalanceSheet_Table, should_Component_Update } from './actions';


class BalanceSheetTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      balanceSheetTable: ""
    }
  }
  componentWillMount(){
        console.log(this.props.ticker)
  }

  componentWillMount() {
    console.log(this.props.ticker)
    this.props.fetchBalanceSheet_Table('aapl','balancesheet').then((data) => {
     const content = data.payload.data.Content
      const balanceSheetTable = content
      this.setState({
      balanceSheetTable: balanceSheetTable
        })
    })
  }

 shouldComponentUpdate(){
    return this.props.shouldComponentUpdate
  }

  render(){

    console.log(this.props.ticker)
    console.log(this.props.shouldComponentUpdate)
    return(
      <div dangerouslySetInnerHTML={{__html: this.state.balanceSheetTable}} />
    )
  }

}

function mapStateToProp(store){
  return {
    balanceSheetTable: store.balanceSheetTable,
    ticker: store.ticker,
    shouldComponentUpdate: store.shouldComponentUpdate
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchBalanceSheet_Table: fetchBalanceSheet_Table,
    should_Component_Update: should_Component_Update

  }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProps)(BalanceSheetTable)

