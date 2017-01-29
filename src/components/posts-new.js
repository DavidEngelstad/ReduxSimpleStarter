import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  /** 
   * PostsNew.contextTypes 
   * this is how we get access to react router property
   */
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    /** 
     * createPost is an action creator that creates a promise as its payload
     * whenever we call an action creator that creates promise as its payload, that call returns the same promise
     */
    this.props.createPost(props)
      .then(() => {
        /** 
         * blog post has been created, navigate user to index 
         * navigate by calling this.context.router.push with the new path to navigate to
         */
        this.context.router.push('/');
      });
  }

  render() {
    /** const handleSubmit = this.props.handleSubmit */
    const { fields: { title, categories, content}, handleSubmit } = this.props;
    
    /** 
     * pass control of inputs off to redux-form by passing in the config objects to each form element {...config}
     * 
     * handing responsibility of form submission off to redux-form with the handleSubmit function 
     * when the form is submitted, handleSubmit is called with the contents of the form
     * if the form is valid, handleSubmit calls the action creator with the contents of the form
     * contents of the form go in an object which goes into the action creator as props
     */
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
};

function validate(values) {
  const errors = {};

  /** if errors returns a key, that exists in the form fields, with a truthy value --> form is invalid and submission is prevented */
  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content';
  }
  return errors;
};

/** 
 * reduxForm injects helpers on this.props in this component and be used to inject action creators
 * 
 * connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
 * reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
 */
export default reduxForm({
  /** form name MUST be unique */
  form: 'PostsNew',
  /** injecting fields.title, fields.categories, fields.content onto props object */
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);