import React from "react";

const VideoScreen = (props) => {
  const {videokey} = props.match.params
  const {video} = props.location.state
  if (!videokey) {
    return <div>Loading...</div>;
  }

  const videoId = videokey;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log('this is the video props ', video);
  return (
    <div className="video-detail container video">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div className="title">{video.snippet.title}</div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoScreen;
