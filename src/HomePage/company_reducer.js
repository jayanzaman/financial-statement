import { SET_COMPANY } from './actions';
// import * as actions from './action';

export default function(state = '', action) {

  switch(action.type){

    case SET_COMPANY:
      return action.payload;
    default:
      return state;
  }
}
