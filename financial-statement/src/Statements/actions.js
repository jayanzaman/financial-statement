
import Axios from 'axios';
// import { browserHistory } from 'react-router';

export const SET_TICKER = 'SET_TICKER';

export const SET_BALANCESHEET_TABLE = 'SET_BALANCESHEET_TABLE';

export const FETCH_INCOMESTATEMENT = "FETCH_INCOMESTATEMENT";


export const FETCH_INCOMESTATEMENT_TABLE = "FETCH_INCOMESTATEMENT_TABLE"

export const FETCH_BALANCESHEET_TABLE = "FETCH_BALANCESHEET_TABLE"

export const SHOULD_COMPONENT_UPDATE = "SHOULD_COMPONENT_UPDATE";

export function should_Component_Update(true_or_false){
  return {
    payload: true_or_false,
    type: SHOULD_COMPONENT_UPDATE

  }
}

export function fetchBalanceSheet_Table(ticker,balancesheet) {

    const request = Axios({
      method: 'get',
      url: `https://services.last10k.com/v1/company/${ticker}/${balancesheet}?formType=10-K&filingOrder=1 HTTP/1.1`,
      headers: {
  'Ocp-Apim-Subscription-Key': '3f7bb0c470e24b14b2f034b5fe522159'
},
      responseType: 'json'
    });

  return {
    type: FETCH_BALANCESHEET_TABLE,
    payload: request
  }

}


export function fetchIncomeStatementTable(ticker,income) {

    const request = Axios({
      method: 'get',
      url: `https://services.last10k.com/v1/company/${ticker}/${income}?formType=10-K&filingOrder=1 HTTP/1.1`,
      headers: {
  'Ocp-Apim-Subscription-Key': '3f7bb0c470e24b14b2f034b5fe522159'
},
      responseType: 'json'
    });

  return {
    type: FETCH_INCOMESTATEMENT_TABLE,
    payload: request
  }

}


export const setTicker = (ticker) => {
  return {
    payload: ticker,
    type: SET_TICKER
  }
}


