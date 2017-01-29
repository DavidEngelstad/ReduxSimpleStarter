import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    /**
     * redux generated a state object that contained our books
     * then redux mapped that state as props to our BookList Component
     * because state was updated through reducer, our component re-rendered with that list of books
     */
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
