// VideoComponent.js

import React from "react";

const VideoComponent = () => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Hackathon Video"
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
