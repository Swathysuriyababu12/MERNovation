import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Generate an array of dates from April 28th to June 4th
  const dates = [];
  const startDate = new Date(2024, 3, 28); // April is 3 (0-indexed month)
  const endDate = new Date(2024, 5, 4); // June is 5 (0-indexed month)
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Format dates as strings in 'yyyy-mm-dd' format
  const dateOptions = dates.map((date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-800 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-white text-lg font-semibold">
              Mernovation
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Timeline
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Information
            </a>

            <a href="#" className="text-gray-300 hover:text-white">
              Live
            </a>
          </div>
          <div className="relative inline-block text-left">
            <div>
              <button
                onClick={toggleDropdown}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                Noticeboard
                <svg
                  className={`h-4 w-4 inline-block ml-1 ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-y-auto max-h-48">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {dateOptions.map((date, index) => (
                    <Link
                      key={index}
                      to={`/${date}`} // Assuming you have a route set up for each date
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      {date}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
