import { SHOULD_COMPONENT_UPDATE } from './actions';
// import * as actions from './action';

export default function(state = false, action) {

  switch(action.type){

    case SHOULD_COMPONENT_UPDATE:
      return action.payload;
    default:
      return state;
  }
}
