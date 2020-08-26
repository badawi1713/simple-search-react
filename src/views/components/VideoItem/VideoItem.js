import React from "react";
import "./VideoItem.css";
const VideoItem = (props) => {
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        props.videoSelect(props.video);
      }}
      className="video-item item"
      key={props.id}
    >
      <img
        className="ui image"
        src={props.video.snippet.thumbnails.medium.url}
        alt="thumbnail-img"
      />
      <div className="content">
        <div className="header"> {props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
