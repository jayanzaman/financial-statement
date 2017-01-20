import { combineReducers } from 'redux';
import StatementReducer from '../Statements/statement_reducer';
import TickerReducer from '../Statements/ticker_reducer';

const rootReducer = combineReducers({
  statement: StatementReducer,
  ticker: TickerReducer
});

export default rootReducer;
