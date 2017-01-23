import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchIncomeStatementTable } from './actions';


class IncomeStatementTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      IncomeStatementTable: "",
    }
  }
  componentWillMount(){
        console.log(this.props.ticker)
  }

  componentWillUpdate() {
    console.log(this.props.ticker)
    this.props.fetchIncomeStatementTable(this.props.ticker,'income').then((data) => {
     const content = data.payload.data.Content
      const IncomeStatementTable = content
      this.setState({
      IncomeStatementTable: IncomeStatementTable
        })
    })
  }

 shouldComponentUpdate(){
    return this.props.shouldComponentUpdate
  }

  render(){

    return(
      <div dangerouslySetInnerHTML={{__html: this.state.IncomeStatementTable}} />
    )
  }

}

function mapStateToProp(store){
  return {
    IncomeStatementTable: store.IncomeStatementTable,
    ticker: store.ticker,
    shouldComponentUpdate: store.shouldComponentUpdate
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchIncomeStatementTable: fetchIncomeStatementTable

  }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProps)(IncomeStatementTable)

