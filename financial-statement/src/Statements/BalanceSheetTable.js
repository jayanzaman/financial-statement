import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTable } from './actions';
var HtmlToReactParser = require('html-to-react').Parser;

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

  componentDidMount() {

    this.props.fetchTable().then((data) => {
     const content = data.payload.data.Content
      const balanceSheetTable = content
      this.setState({
      balanceSheetTable: balanceSheetTable
        })
    })
  }

  render(){
    console.log(this.state.balanceSheetTable)
    return(
      <div dangerouslySetInnerHTML={{__html: this.state.balanceSheetTable}} />
    )
  }

}

function mapStateToProp(store){
  return {
    balanceSheetTable: store.balanceSheetTable,
    ticker: store.ticker
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchTable: fetchTable

  }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProps)(BalanceSheetTable)

