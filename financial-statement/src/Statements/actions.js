
import financialData from '../components/financialData'
import Axios from 'axios';
// import { browserHistory } from 'react-router';

export const SET_TICKER = 'SET_TICKER';

export const SET_BALANCESHEET_TABLE = 'SET_BALANCESHEET_TABLE';

export const SET_BALANCESHEET_OBJ = 'SET_BALANCESHEET_OBJ';

export const FETCH_STATEMENT = "FETCH_STATEMENT";

export const FETCH_API = "FETCH_API";

export const FETCH_BALANCESHEET = "FETCH_BALANCESHEET";

export const FETCH_INCOMESTATEMENT = "FETCH_INCOMESTATEMENT";

export const FETCH_CASHFLOW = "FETCH_CASHFLOW";

export const FETCH_TABLE = "FETCH_TABLE";

export function fetchTable() {

    const request = Axios({
      method: 'get',
      url: 'https://services.last10k.com/v1/company/aapl/balancesheet?formType=10-K&filingOrder=1 HTTP/1.1',
      headers: {
  'Ocp-Apim-Subscription-Key': '3f7bb0c470e24b14b2f034b5fe522159'
},
      responseType: 'json'
    });

  return {
    type: FETCH_TABLE,
    payload: request
  }

}

export const setTicker = (ticker) => {
  return {
    payload: ticker,
    type: SET_TICKER
  }
}

export const setBalanceSheetObj = (balanceSheetObj) => {
  return {
    payload: balanceSheetObj,
    type: SET_BALANCESHEET_OBJ
  }
}

export const setBalanceSheetTable = (balanceSheetTable) => {
  return {
    payload: balanceSheetTable,
    type: SET_BALANCESHEET_TABLE
  }
}

export function fetchStatement() {

    const request = financialData

  return {
    type: FETCH_STATEMENT,
    payload: request
  }
}

export function fetchAPI() {

    const request = Axios({
      method: 'get',
      url: 'https://services.last10k.com/v1/company/aapl/balancesheet?formType=10-K&filingOrder=1 HTTP/1.1',
      headers: {
  'Ocp-Apim-Subscription-Key': '3f7bb0c470e24b14b2f034b5fe522159'
},
      responseType: 'json'
    });

  return {
    type: FETCH_API,
    payload: request
  }

}

export function fetchBalanceSheet(ticker) {

  const request = Axios({
        method: 'get',
        url: 'http://localhost:8080/',
        responseType: 'json'
    });
  return {
    type: FETCH_BALANCESHEET,
    payload: request
  }



  // const ROOT_URL = `https://services.last10k.com/v1/company/${ticker}/balancesheet?formType=10-K&filingOrder=1 HTTP/1.1`

  // const request = Axios({
  //     method: 'get',
  //     url: ROOT_URL,
  //     headers: {
  //       'Ocp-Apim-Subscription-Key': '3f7bb0c470e24b14b2f034b5fe522159'
  //     },
  //     responseType: 'json'
  //   });

  // return {
  //   type: FETCH_BALANCESHEET,
  //   payload: request
  // }
}

export function fetchIncomeStatement(ticker) {

var aapl = "aapl"
const ROOT_URL = `https://services.last10k.com/v1/company/${aapl}/income?formType=10-K&filingOrder=1 HTTP/1.1`

  const request = Axios({
      method: 'get',
      url: ROOT_URL,
      headers: {
        'Ocp-Apim-Subscription-Key': '3f7bb0c470e24b14b2f034b5fe522159'
      },
      responseType: 'json'
    });

  return {
    type: FETCH_INCOMESTATEMENT,
    payload: request
  }
}

export function fetchCashFlow(ticker) {

  const ROOT_URL = `https://services.last10k.com/v1/company/${ticker}/cashflows?formType=10-K&filingOrder=1 HTTP/1.1`

  const request = Axios({
      method: 'get',
      url: ROOT_URL,
      headers: {
        'Ocp-Apim-Subscription-Key': '3f7bb0c470e24b14b2f034b5fe522159'
      },
      responseType: 'json'
    });

  return {
    type: FETCH_CASHFLOW,
    payload: request
  }
}
