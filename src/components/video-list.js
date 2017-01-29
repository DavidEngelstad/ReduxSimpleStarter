import React from 'react';
import VideoListItem from './video-list-item';

/**
 * Functional component --> have to pass in props as parameter
 * Class-based component --> can access props via this.props 
 */
const VideoList = (props) => {
  /** 
   * Use map to create a list of components to render.
   * Provide a unique key to optimize look-up.
   */
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;