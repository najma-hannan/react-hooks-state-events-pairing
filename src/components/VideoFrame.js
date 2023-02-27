import React from "react";


function VideoFrame({title, embedUrl}){
  return (
    <iframe
        width="500"
        height="263"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
  )
}


export default VideoFrame;
