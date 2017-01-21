import { FETCH_BALANCESHEET } from './actions';
// import * as actions from './action';

export default function(state = {}, action) {

  switch(action.type){

    case FETCH_BALANCESHEET:
      return action.payload;
    default:
      return state;
  }
}
