import React from "react";

const AboutMe = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
      <h2 className="text-3xl font-semibold mb-4 text-blue-600 transition-transform duration-500 ease-in-out hover:scale-105">
        About Me
      </h2>
      <p className="text-lg text-gray-700 mb-4">
        hello world
      </p>
      
      <h3 className="text-2xl font-semibold mt-6 text-blue-500">Projects</h3>
      <ul className="list-disc pl-6 mt-2 space-y-2 text-lg">
        <li className="text-gray-800 hover:text-blue-600 transition-all duration-300">
          <strong>Project 1:</strong> aa
        </li>
        <li className="text-gray-800 hover:text-blue-600 transition-all duration-300">
          <strong>Project 2:</strong> bb
        </li>
        <li className="text-gray-800 hover:text-blue-600 transition-all duration-300">
          <strong>Project 3:</strong> cc
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
