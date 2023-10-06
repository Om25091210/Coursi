import React, { useState } from "react";

const Modules = ({ title, duration, rating, description, skills }) => {
  // State to track the visibility of the long description
  const [showLongDescription, setShowLongDescription] = useState(false);

  // Function to toggle the long description visibility
  const toggleLongDescription = () => {
    setShowLongDescription(!showLongDescription);
  };

  return (
    <div className="py-4">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="px-6 py-4 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Duration: <strong>{duration}</strong>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Rating: <strong>{rating}</strong>
            </p>
          </div>
          <div>
            <button
              type="button"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              onClick={toggleLongDescription}
            >
              {showLongDescription ? "Hide Details" : "Course Details"}
            </button>
          </div>
        </div>

        {/* Conditional rendering based on the state */}
        {showLongDescription && (
          <div className="px-6 py-2 text-sm text-gray-600 dark:text-gray-400">
            <p>
              <strong>What you'll learn:</strong>
            </p>
            <ul className="list-disc pl-6 p-2">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-2 p-2">
              <strong>Skills you will learn:</strong>
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 dark:bg-gray-600 px-2 py-1 text-sm rounded-full text-gray-800 dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modules;
