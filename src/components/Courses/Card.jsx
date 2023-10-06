import React from 'react';

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
  } from "../../assets/index";
import { Link } from 'react-router-dom';
  
const Card = ({ id,icon, title, description }) => {
  return (
    <div className="gradient-border-magic">
      <article className="h-[400px] flex flex-col items-center justify-between overflow-hidden rounded-lg shadow transition hover:shadow-lg relative">
        <img alt={title} src={icon} className="h-1/2 w-full object-contain p-6" />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <Link to={`/courses/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Card;
