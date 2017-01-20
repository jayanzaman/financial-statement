import React, { Component } from 'react';
import FinancialStatement from '../Statements/index';


class HomePage extends Component {

  render() {

    return (

      <div>
        <h1>Apple Inc.</h1>
        <FinancialStatement />
      </div>

    );
  }
}


export default HomePage;
