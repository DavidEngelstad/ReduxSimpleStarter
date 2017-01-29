/** Need to import React for JSX transpilation */
import React, { Component } from 'react';
/** same thing as const Component = React.Component; */

/**
 * Classes in React
 * 
 * Here we define a new class and give it access to all of the functionality that exists in the React.component class.
 * This is a class based component as opposed to a functional component.
 * Class based components have state, functional components do not.
 * Every class based component must have a render method that returns JSX.
 */
class SearchBar extends Component {
  /**
   * Constructor in React
   * 
   * Reserved for setting up class --> initializing variables, setting up state.
   * Call parent method that exists on parent class by calling super.
   */
  constructor(props) {
    super(props);
    /**
     * State in React
     * 
     * State is a plain JS object used to record and react to user events.
     * Each class based component that we define has its own state object.
     * Whenever a component's state is changed, the component immediately re-renders and forces all of its children to re-render as well.
     * Have to initialize state object before using it in a component.
     * Initialize by setting property state to a plain JS object inside of class's constructor method.
     * 
     * State in react is component level.
     * State in redux is app level.
     */

    /** Only inside of constructor do we EVER set state equal to something */
    this.state = { term: '' };
  }
  render() {
    /**
     * Event Handling in React
     * 
     * Step 1: Declare an event handler --> f(x) that runs whenever event occurs.
     * Step 2: Pass event handler to element we want to monitor for events.
     * 
     * Note: Event handler gets passed an event object that describes the event that occurred.
     * Note: onChange --> react event
     */

    /** Anywhere outside of constructor, we use setState to change state */
    return (
      /**
       * onChange={event => this.setState({ term: event.target.value })}
       * 
       * In the above code, whenever we change input, we call setState which updates the term and causes component to automatically re-render.
       * On re-render, the updated information is pushed into the DOM.
       * Every time component re-renders, we see the updated term value.
       * As is, the input is telling the state what the current value should be.
       * 
       * In practice, it should be the reverse.
       * The state should tell the input what the current value should be.
       */ 
      <div className="search-bar">
        <input 
          /** 
           * When we tell input that its value is provided by this.state.term, we turn it into a controlled component.
           * Controlled component has its value set by state, so its value only ever changes when the state changes.
           * When user types something, they DID NOT change the input value, only triggered an event.
           * This event causes the DOM to re-render.
           * When it re-renders, the value of the input is set to the value of the term in the state.
           */
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
