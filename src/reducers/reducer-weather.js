import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  /** 
   * redux-promise (middleware) stops the action if the payload is a promise
   * after the promise resolves, redux-promise creates a new action and sends it to the reducers
   * this way, the reducer can receive an unwrapped promise in the payload 
   */
  switch (action.type) {
  case FETCH_WEATHER: 
    /** 
     * must return a new instance of state 
     * ES5: return state.concat([action.payload.data]);
     */
    return [ action.payload.data, ...state ]
  }
  return state;
};

