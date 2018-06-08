import React from 'react';
import { Link } from "react-router-dom";

const VideoListItem = ({video, onVideoSelect}) => {
  const imgURL = video.snippet.thumbnails.high.url;

  return (
      <div onClick={() => onVideoSelect(video)} id="list-item-column">
       <Link to={{ pathname: `/${video.id.videoId}`, state: { video: video } }}>
          <div>
            <img classNmae="media-object" id="media-object" src={imgURL} />
          </div>
          <div id="mediaBody">
            <div classNmae="media-heading" id="video-titles">{video.snippet.title}</div>
          </div>
      </Link>
      </div>
  );
};

export default VideoListItem;
