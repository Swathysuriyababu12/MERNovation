// VideoComponent.js

import React from "react";

const VideoComponent = () => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src="https://drive.google.com/file/d/1AK1yEMa5oi9An9Va80lbXAjnhqpi2yY2/view?usp=sharing"
        title="Hackathon Video"
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
