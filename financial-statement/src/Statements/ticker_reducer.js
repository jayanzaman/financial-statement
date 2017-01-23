import { SET_TICKER } from './actions';
// import * as actions from './action';

export default function(state = '', action) {

  switch(action.type){

    case SET_TICKER:
      return action.payload;
    default:
      return state;
  }
}
