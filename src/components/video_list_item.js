import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imgURL = video.snippet.thumbnails.high.url;

  return (
      <div onClick={() => onVideoSelect(video)} id="list-item-column">
        <div>
          <img classNmae="media-object" id="media-object" src={imgURL} />
        </div>
        <div id="mediaBody">
          <div classNmae="media-heading" id="video-titles">{video.snippet.title}</div>
        </div>
      </div>
  );
};

export default VideoListItem;
