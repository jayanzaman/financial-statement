import { SET_BALANCESHEET_TABLE } from './actions';
// import * as actions from './action';

export default function(state = {}, action) {

  switch(action.type){

    case SET_BALANCESHEET_TABLE:
      return action.payload;
    default:
      return state;
  }
}
