import React, { useState } from "react";
import {
  FaRegAddressBook,
  FaRegCalendarAlt,
  FaRegClock,
  FaRegEnvelope,
} from "react-icons/fa";

const icons = [FaRegAddressBook, FaRegCalendarAlt, FaRegClock, FaRegEnvelope];

const TimelineMap = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedC, setSelectedC] = useState(null);

  // Generate an array of 30 days
  const days = [
    {
      day: "27-April",
      content: `Hackathon Inaugration Mail shared with forms+Video+proposal template+meet schedule
                mails  sdjjssf`,
    },
    { day: 2, content: "Content for day 2" },
    { day: 3, content: "Content for day 3" },
    { day: 4, content: "Content for day 4" },
    { day: 5, content: "Content for day 5" },
    { day: 6, content: "Content for day 6" },
    { day: 7, content: "Content for day 7" },
    { day: 8, content: "Content for day 8" },
    { day: 9, content: "Content for day 9" },
    { day: 10, content: "Content for day 10" },
    { day: 11, content: "Content for day 11" },
    { day: 12, content: "Content for day 12" },
    { day: 13, content: "Content for day 13" },
    { day: 14, content: "Content for day 14" },
    { day: 15, content: "Content for day 15" },
    { day: 16, content: "Content for day 16" },
    { day: 17, content: "Content for day 17" },
    { day: 18, content: "Content for day 18" },
    { day: 19, content: "Content for day 19" },
    { day: 20, content: "Content for day 20" },
    { day: 21, content: "Content for day 21" },
    { day: 22, content: "Content for day 22" },
    { day: 23, content: "Content for day 23" },
    { day: 24, content: "Content for day 24" },
    { day: 25, content: "Content for day 25" },
    { day: 26, content: "Content for day 26" },
    { day: 27, content: "Content for day 27" },
    { day: 28, content: "Content for day 28" },
    { day: 29, content: "Content for day 29" },
    { day: 30, content: "Content for day 30" },
  ];

  const handleDayClick = (day, content) => {
    console.log(day);
    setSelectedDay(day);
    setSelectedC(content);
  };

  const closeModal = () => {
    setSelectedDay(null);
  };

  return (
    <div className="grid grid-cols-8 gap-6 justify-center mt-4">
      {days.map(({ day, content }, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => handleDayClick(day, content)}
        >
          <div
            className={`flex items-center justify-center w-16 h-16 border border-gray-300 rounded-full shadow-md ${
              selectedDay === day
                ? "bg-green-500 text-white shadow-lg"
                : "hover:shadow-lg hover:bg-green-600"
            }`}
          >
            {React.createElement(icons[index % icons.length], { size: 24 })}
          </div>
          <span className="text-lg">{day}</span>
        </div>
      ))}
      {selectedDay && (
        <Modal day={selectedDay} onClose={closeModal} content={selectedC} />
      )}
    </div>
  );
};

const Modal = ({ day, onClose, content }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md">
        <p className="text-lg">Modal Content for Day {day}</p>
        <p>{content}</p>
        <button
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TimelineMap;
