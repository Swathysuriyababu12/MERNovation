import React from "react";
import FormComponent from "./smallComp/FormComponent";
import VideoComponent from "./smallComp/VideoComponent";
import MeetScheduleComponent from "./smallComp/MeetScheduleComponent";
/* @vite-ignore */

const Event1 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Hackathon Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          {/* Insert your video component here */}
          <VideoComponent />
        </div>

        <div className="mb-4">
          {/* Insert your meet schedule component here */}
          <MeetScheduleComponent />
        </div>
      </div>
    </div>
  );
};

export default Event1;
