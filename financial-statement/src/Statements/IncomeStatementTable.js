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

  componentDidMount() {
    console.log(this.props.ticker)
    this.props.fetchIncomeStatementTable('aapl','income').then((data) => {
     const content = data.payload.data.Content
      const IncomeStatementTable = content
      this.setState({
      IncomeStatementTable: IncomeStatementTable
        })
    })
  }

 // shouldComponentUpdate(nextProps, nextState){
 //    return this.props.shouldComponentUpdate
 //  }

  render(){

    return(
      <div dangerouslySetInnerHTML={{__html: this.state.IncomeStatementTable}} />
    )
  }

}

function mapStateToProp(store){
  return {
    IncomeStatementTable: store.IncomeStatementTable,
    ticker: store.ticker
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchIncomeStatementTable: fetchIncomeStatementTable

  }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProps)(IncomeStatementTable)

