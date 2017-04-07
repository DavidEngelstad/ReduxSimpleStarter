import React, { Component } from 'react'

class SearchBar extends Component {
  constructor ( props ) {
    super(props);
      this.state = { term: '' };
    }
    render() {
      return (
      <div>
        <input 
          value={this.state.term}
          onChange={ event =>  this.setState( { term: event.target.value } ) } />
          {/*Value of the input: {this.state.term}*/}
      </div>
      )
    }
  }

// start off with a functional Component
// refactor to make it a class when you need to add more functionality

// state is a plain js object that records and reacts to user events
// every class has a state object
// whenever a state is changed, the class rerenders
// constructor is the first and only function called when a new instance is made
// each instance of a class has its own state
// always use this.setState

export default SearchBar;