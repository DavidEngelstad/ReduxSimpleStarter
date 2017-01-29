import React, { Component } from 'react';
import { connect } from 'react-redux';
/** alternatively: import { bindActionCreators } from 'redux'; */
import { fetchPosts } from '../actions/index';
/** Link manifests itself as an anchor tag */
import { Link } from 'react-router';

class PostsIndex extends Component {
  /**
   * lifecycle method: componentWillMount
   * react automatically calls this when component is about to be rendered to the DOM for the FIRST time
   * i.e. it is only called once
   */
  componentWillMount() {
    /** can only dispatch an action after dispatch has been mapped to props */
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <strong>{post.title}</strong>
            <span className="pull-xs-right">{post.categories}</span>
          </Link>
        </li>
      );
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
};

/**
 * alternatively:
 * function mapDispatchToProps(dispatch) {
 *   return bindActionCreators({ fetchPosts }, dispatch);
 * }
 */

function mapStateToProps(state) {
  return { posts: state.posts.all }
};

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);