import { combineReducers } from 'redux';
import StatementReducer from '../Statements/statement_reducer';
import TickerReducer from '../Statements/ticker_reducer';
import BalanceSheetObjReducer from '../Statements/balanceSheetObj_reducer';

const rootReducer = combineReducers({
  statement: StatementReducer,
  ticker: TickerReducer,
  balanceSheetObj: BalanceSheetObjReducer
});

export default rootReducer;
