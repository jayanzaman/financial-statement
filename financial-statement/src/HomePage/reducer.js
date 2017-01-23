import { combineReducers } from 'redux';

import TickerReducer from '../Statements/ticker_reducer';
import BalanceSheetTableReducer from '../Statements/balanceSheetTable_reducer'
import shouldComponentUpdateReducer from '../Statements/shouldComponentUpdate_reducer'

const rootReducer = combineReducers({
  ticker: TickerReducer,
  shouldComponentUpdate: shouldComponentUpdateReducer
});

export default rootReducer;
