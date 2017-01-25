import { combineReducers } from 'redux';

import TickerReducer from '../Statements/ticker_reducer';
// import BalanceSheetTableReducer from '../Statements/balanceSheetTable_reducer'
import shouldComponentUpdateReducer from '../Statements/shouldComponentUpdate_reducer'
import CompanyReducer from './company_reducer';

const rootReducer = combineReducers({
  ticker: TickerReducer,
  shouldComponentUpdate: shouldComponentUpdateReducer,
  company: CompanyReducer
});

export default rootReducer;
