import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchIncomeStatementTable } from './actions';
import { setCompany } from '../HomePage/actions';

class IncomeStatementTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      IncomeStatementTable: "",
    }
  }
  componentWillMount(){
        console.log(this.props.ticker)
        console.log(this.props.company)
  }

  componentWillUpdate() {
    console.log(this.props.ticker)
    this.props.fetchIncomeStatementTable(this.props.ticker,'income').then((data) => {
      const content = data.payload.data.Content
      const IncomeStatementTable = content
      this.props.setCompany(data.payload.data.Company)
      console.log(data.payload.data.Company)
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
    shouldComponentUpdate: store.shouldComponentUpdate,
    company: store.company
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchIncomeStatementTable: fetchIncomeStatementTable,
    setCompany: setCompany

  }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProps)(IncomeStatementTable)

