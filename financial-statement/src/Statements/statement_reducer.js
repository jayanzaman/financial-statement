import { FETCH_STATEMENT } from './actions';
// import * as actions from './action';

export default function(state = {}, action) {

  switch(action.type){
    case FETCH_STATEMENT:
      return action.payload;
    default:
      return state;
  }
}
