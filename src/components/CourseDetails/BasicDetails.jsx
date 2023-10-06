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
} from "../../assets/index";

const BasicDetails = ({ id, icon, title, description }) => {
  return (
    <div id="basic-details-section"className="gradient-border-magic flex flex-col md:flex-row">
      <article className="me-10 w-4/6 h-[500px] overflow-hidden rounded-lg shadow transition hover:shadow-lg relative">
        <img
          alt="python"
          src={pythonIcon}
          className="h-1/4 object-contain ps-6 pt-6 pe-6 ms-6 mt-2 mb-2" // Adjust the margin value here
        />
        <a href="#">
          <h5 className="sm:w-full w-4/5 ms-12 mb-1 font-body text-4xl tracking-tight text-gray-900 dark:text-white">
            Python Professional Certificate Course
          </h5>{" "}
          {/* Adjust font size and other styling */}
        </a>
        <a href="#">
          <h5 className="sm:w-full w-4/5 ms-12 mt-8 text-xl/2 font-body font-semibold  tracking-tight text-gray-900 dark:text-white">
            Prepare for a career as a Python Developer. Develop in-demand skills
            and hands-on experience to get job-ready in as little as 2 months.
            No prior experience required.
          </h5>{" "}
          {/* Adjust font size and other styling */}
        </a>
        <div className="flex mt-8 space-x-4">
          <img
            src={arun}
            alt="Instructor 1"
            className="ms-12 mb-1 w-8 h-8 rounded-full"
          />
          {/* Add more instructor images as needed */}
          <a
            href="https://www.linkedin.com/in/arun-veluthakal-671313171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5 className="font-body sm:w-full w-4/5 mt-1 text-xl/2 font-semibold tracking-tight text-gray-900 dark:text-white">
              Instructor :{" "}
              <span className="text-orange-500 font-bold">Arun Velukuthal</span>
              <span className="ms-4 font-body inline-block bg-purple-950 text-white px-2 py-1 rounded-lg text-xs">
                Top Instructor
              </span>
            </h5>
          </a>
        </div>

        <div className="mt-6">
          <p className="ms-12 text-lg font-body text-gray-900 dark:text-white">
            Ready to start your learning journey?
          </p>
          <p className="ms-12 text-sm text-gray-700 dark:text-gray-300">
            Enroll now to gain valuable skills and advance your career!
          </p>
          <button
            type="button"
            className="ms-12 mt-4 px-8 py-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-bold rounded-md text-base shadow-lg"
          >
            Enroll Now
          </button>
          <button
            type="button"
            className="ms-6 px-6 py-4 text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-md text-base shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </article>

      <div className="h-[400px] mt-10 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-1 text-2xl font-body text-gray-500 dark:text-gray-400">
          Professional Certificate - 7 Course Series
        </h5>
        <p className="mb-2 text-sm font-body text-gray-600 dark:text-gray-300">
          Earn a career credential that demonstrates your expertise
        </p>
        <hr className="my-2 border-gray-300 dark:border-gray-700" />
        <div className="flex items-center mb-2 space-x-1 text-yellow-500">
          <span className="text-lg font-semibold text-gray-600 dark:text-gray-300">
            4.7
          </span>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 fill-current mt-1"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.35 6.17a.81.81 0 00-.75-.35H10L8.78 2.06a.88.88 0 00-.43-.48.84.84 0 00-.64 0 .85.85 0 00-.51.52L6 5.82H2.36a.89.89 0 00-.6.23.82.82 0 00.06 1.25l3.09 2.37-1.19 3.76a.83.83 0 00.57 1 .819.819 0 00.71-.11L8 12l3 2.29a.78.78 0 00.52.19h.09a.88.88 0 00.56-.31.85.85 0 00.14-.78l-1.2-3.74 3.08-2.36a.83.83 0 00.16-1.12z" />
            </svg>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              (5 reviews)
            </span>
          </div>
        </div>

        <h6 className="mb-1 font-medium font-body text-gray-800 dark:text-gray-200">
          Beginner Level
        </h6>
        <p className="mb-1 font-semibold font-body text-sm text-gray-500 dark:text-gray-400">
          No previous experience necessary
        </p>
        <h6 className="mt-3 font-medium font-body text-gray-800 dark:text-gray-200">
          3 months at 10 hours a week
        </h6>
        <h6 className="mt-3 font-medium font-body text-gray-800 dark:text-gray-200">
          Flexible Schedule
        </h6>
        <p className="mb-1 font-semibold font-body text-sm text-gray-500 dark:text-gray-400">
          Learn at your own pace
        </p>
        <hr className="my-2 mt-3 border-gray-300 dark:border-gray-700" />
        <a
          href="#courses-section" // This should match the ID of the section you want to scroll to
          className="mt-5 block text-blue-500 font-medium text-sm text-center"
        >
          View all courses
        </a>
      </div>
    </div>
  );
};

export default BasicDetails;
