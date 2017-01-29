import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

/** Don't have to specify .js if js file. */
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

/**
 * Downwards Data Flow
 * 
 * Only the most parent component should be responsible for fetching data. 
 */
const API_KEY = 'AIzaSyAlfWshNyVM5yOkuAJvJVSZvtpdBEz8214';

/** RULE: ONE COMPONENT PER FILE */

/**
 * Components
 * 
 * Components should produce some HTML.
 * There are functional and class based components.
 * Functional components have no concept of state and their only functionality is whatever they return.
 * App is a class that produces instances.
 * To make an instance of App, need to wrap it in JSX --> <App />
 * 
 * Q to ask before making ANY component: Do I expect this component to maintain any kind of state?
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      /** ES6 syntactic sugar --> if key & value are same name can just write name once */
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  /** Evaluate JS in JSX within curly braces */
  /** 
   * Pass callback function from App component down to VideoListItem via props.
   * When onVideoSelect is called via a click event, it will setState with the selected video.
   * Rare for callback passing to go more than two levels deep.
   */
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
};

/**
 * Take this component's generated HTML and put it on the page (in the DOM).
 * Second argument specifies a root node/container element.
 * ReactDOM.render attaches an instantiation of a component to the specified root node/container element.
 */
ReactDOM.render(<App />, document.querySelector('.container'));