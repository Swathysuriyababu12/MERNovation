// FormComponent.js

import React from "react";

const FormComponent = () => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-lg font-semibold mb-1">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-semibold mb-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="proposal" className="block text-lg font-semibold mb-1">
          Proposal:
        </label>
        <textarea
          id="proposal"
          name="proposal"
          rows="4"
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
