import { FETCH_INCOMESTATEMENT_TABLE } from './actions';
// import * as actions from './action';

export default function(state = {}, action) {

  switch(action.type){
    case FETCH_INCOMESTATEMENT_TABLE:
      return action.payload;
    default:
      return state;
  }
}
