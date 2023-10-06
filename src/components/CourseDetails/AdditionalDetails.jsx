import React from "react";

import {
  pythonIcon,
  powerbiIcon,
  tableauIcon,
  awsIcon,
  azureIcon,
  excelIcon,
  gcpIcon,
  gitIcon,
  htmlIcon,
  angularIcon,
  cssIcon,
  javaIcon,
  javascriptIcon,
  nodejsIcon,
  reactIcon,
  seleniumIcon,
  sqlIcon,
  arun,
  convo,
  linkedin,
} from "../../assets/index";

const AdditionalDetails = ({ skills }) => {
  return (
    <div>
      <h2 className="mt-6 ms-12 font-body text-xl mb-4">What you'll learn</h2>
      <div className="ms-10 me-10 mb-10 grid grid-cols-2 gap-2">
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-green-500 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p>
            Master the most up-to-date practical skills and knowledge that data
            scientists use in their daily roles
          </p>
        </div>
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-green-500 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p>
            Learn the tools, languages, and libraries used by professional data
            scientists, including Python and SQL
          </p>
        </div>
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-green-500 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p>
            Import and clean data sets, analyze and visualize data, and build
            machine learning models and pipelines
          </p>
        </div>
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-green-500 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p>
            Apply your new skills to real-world projects and build a portfolio
            of data projects that showcase your proficiency to employers
          </p>
        </div>
      </div>
      <h2 className="ms-12 font-body text-xl mb-4">Skills You'll Gain</h2>
      <div className="ms-10 flex flex-wrap mt-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="ms-2 mb-2 bg-blue-200 text-blue-700 px-3 py-1 rounded-md text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <h2 className="ms-12 mt-10 font-body text-xl mb-4">Details to know</h2>
      <div className="ms-10 grid grid-cols-2 gap-4">
        {/* First Column */}
        <div className="ms-4 flex items-center">
          {/* You can replace 'icon.png' with your actual icon image */}
          <img src={linkedin} alt="Icon" className="w-8 h-8 mr-2" />
          <div>
            <p className="ms-3 font-bold">Shareable certificate</p>
            <p className="ms-3 font-semibold">Add to your LinkedIn profile</p>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex items-center">
          {/* You can replace 'language.png' with your actual language icon image */}
          <img src={convo} alt="Language Icon" className="w-8 h-8 mr-2" />
          <div>
            <p className="ms-3 font-bold">English</p>
            <p className="ms-3 font-semibold">
              All our lectures are taught in English.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails;
