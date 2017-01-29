/**
 * action creater is a f(x) that returns an action (an object)
 * action has a type and optionally some extra data that further describes the action
 * returned action/object is then sent to all reducers 
 * reducers can choose, depending on the action, to return a new piece of state, depending on the action
 * new state is then passed to application state 
 * new state sent to all containers and they re-render with new props 
 */

/** need to make sure returned action runs through all reducers */
export function selectBook(book) {
  /** 
   * selectBook is an ActionCreator
   * it needs to return an action --> an object with a type property 
   * actions always have a type value and sometimes a payload value 
   * type must describe the purpose of the action 
   */
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
};