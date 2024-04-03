// DatePage.js
/* @vite-ignore */

import React, { Suspense, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DynamicComponentLoader from "./DynamicComponentLoader";

const DatePage = () => {
  const { date } = useParams();
  const componentPromise = import(`../EventComponents/E-${date}.jsx`);

  // Render the selected event component inside Suspense
  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-4">Events for {date}</h2>
      <DynamicComponentLoader
        componentPromise={componentPromise}
        fallback={<div>Loading...</div>}
      />
    </div>
  );
};

// EventComponentLoader component to handle lazy loading of event components
const EventComponentLoader = ({ event: EventComponent }) => {
  console.log(EventComponent);
  if (typeof EventComponent !== "function") {
    console.error("Invalid EventComponent:", EventComponent);
    return null;
  }

  return <EventComponent />;
};

// Define a component for when no events are found for the selected date
const NoEventComponent = () => {
  return <p className="text-lg">No events found for this date.</p>;
};

export default DatePage;

// const MyComponent = () => {
//   // Dynamically import the component

//   return (
//     <div>
//       <h1>My Component</h1>
//       <DynamicComponentLoader componentPromise={componentPromise} fallback={<div>Loading...</div>} />
//     </div>
//   );
// };

// export default MyComponent;
