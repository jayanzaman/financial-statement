import { SET_BALANCESHEET_OBJ } from './actions';
// import * as actions from './action';

export default function(state = {}, action) {

  switch(action.type){

    case SET_BALANCESHEET_OBJ:
      return action.payload;
    default:
      return state;
  }
}
