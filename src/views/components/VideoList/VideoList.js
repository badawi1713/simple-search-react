import React from "react";
import VideoItem from "../VideoItem/VideoItem";

const VideoList = ({ videos, videoSelect }) => {
  const renderedList = videos.map((item, index) => {
    return (
      <VideoItem
        key={index}
        videoSelect={videoSelect}
        video={item}
        id={item.id.videoId}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
