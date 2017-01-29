/** 
 * reducer only ever called when action occurs 
 * state argument is not application state
 * it is the state for which this reducer is responsible
 * */

/** if state is undefined set it to null */
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    /** NEVER mutate state */
    return action.payload;
  }
  return state;
};