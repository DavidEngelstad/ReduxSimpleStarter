import React from 'react';

const VideoDetail = ({video}) => {
  /**
   * YT data fetch won't have completed by the time react says to render this component.
   * So we provided a condition for when the video is undefined.
   * When the YT fetch is complete, the state of the parent component changes because we retrieved the videos.
   * B/c the state changed, this caused the parent and children components to re-render.
   */
  if (!video) {
    return <div>Loading...</div>;
  };

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;