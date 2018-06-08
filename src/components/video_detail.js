import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoID = video.id.videoId;
  const URL = `https://www.youtube.com/embed/${videoID}`;
  const publishDate = (video.snippet.publishedAt).slice(0,10);
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe classNmae="embed-responsive-item" src={URL}></iframe>
      </div>
      <div>
        <div className="publish-date">{publishDate}</div>
        <div className="title">{video.snippet.title}</div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
