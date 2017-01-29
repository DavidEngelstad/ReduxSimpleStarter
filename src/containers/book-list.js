import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

/** when forge component with redux, makes it a smart component */
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
};

function mapStateToProps(state) {
  /** 
   * whatever is returned will show up as props inside of BookList
   */
  return {
    books: state.books
  };
};

/**
 * anything returned from this f(x) will end up as props on the BookList container
 * i.e. whatever is passed as the first argument to f(x)
 * so this.props.selectBook will exist on this container and can be used to call the action creator
 */
function mapDispatchToProps(dispatch) {
  /** 
   * purpose: whenever selectBook is called, the result should be passed to all of our reducers
   * this is what bindActionCreators is doing --> ensures the result of calling selectBook flows through the dispatch function
   * dispatch takes the result and feeds to ALL reducers in application 
   */
  return bindActionCreators({ selectBook: selectBook }, dispatch);
};

/** 
 * promote BookList from a component to a container - it needs to know about this new 
 * dispatch method, selectBook. make it available as a prop.
 * 
 * whenever we make a container file, want to export the container 
 * connect takes a function and a component and produces a container
 * container is a component that is aware of the state that is contained by redux
 * mapStateToProps function takes in state as argument and returns an object
 * whatever object is returned will be available to the component as this.props
 * 
 * notes on connect:
 * 1) if application state state ever changes then this container will automatically re-render
 * 2) whenever application state changes, object in state function will be assigned to component as this.props
 */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);