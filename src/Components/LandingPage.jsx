import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto text-center p-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide">
          Welcome
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Join us for an unforgettable hackathon experience
        </p>
        <a
          href="#register"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline"
        >
          Register Now
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 mb-4 text-center text-white">
        <p className="text-sm">© 2024 Mernovation</p>
      </div>
    </div>
  );
};

export default LandingPage;
