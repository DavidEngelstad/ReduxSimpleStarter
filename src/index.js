import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; // make sure the file reference is unique and specific

// Youtube API Key : AIzaSyBy9D_dNHnT-d4C0gzXh0PWL7giguIy2L4	
const API_KEY = 'AIzaSyBy9D_dNHnT-d4C0gzXh0PWL7giguIy2L4'	

YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
  console.log(data);
});

// component something that renders html
// nest components together to 
// component is a collection of js that produces html

// Create a new component This component should produce some HTML
// const means it's the final value of the variable (constant) never 
// going to redefine const (App)

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
} 
    // the divs are JSX 
    // a tree like component

// Take this componenet's HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'))
// wrapping it in a JSX tag makes the App an instance
// whenever you want to make use of a component just wrap it in a JSX tag

// breaking app up into components makes it really easy to reuse them 
    // like reusing search bars
// one componenet per file

// Downward Data Flow: only most parent component should be responsible for fetching data