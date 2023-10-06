import React from "react";
import { VscDatabase } from "react-icons/vsc";
import {
  SiPython,
  SiPowerbi,
  SiTableau,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiGit,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
  SiJavascript,
  SiSelenium,
} from "react-icons/si";
import { BsArrowRight } from 'react-icons/bs'
import { FaJava } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import { Link } from "react-router-dom";

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
  sqlIcon
} from '../../assets/index'


const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden="true"
        class="flex absolute -top-96 left-1/2 transform -translate-x-1/2"
      >
        <div class="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
        <div class="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              CourSi Academy
            </p>

            <div className="mt-5 max-w-2xl">
              <h1 className="flex flex-wrap justify-center align-center gap-3 block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                <span className="animated-gradient-text_background-1">
                  <span className="animated-gradient-text_foreground-1">
                    Start.
                  </span>
                </span>
                <span className="animated-gradient-text_background-2">
                  <span className="animated-gradient-text_foreground-2">
                    Learn.
                  </span>
                </span>
                <span className="animated-gradient-text_background-3">
                  <span className="animated-gradient-text_foreground-3">
                    Grow.
                  </span>
                </span>
              </h1>
            </div>

            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We believe that the future belongs to those who invest in
                themselves and their teams. That's why we're dedicated to
                helping companies, universities and candidates develop the
                skills and knowledge they need to succeed in the digital age.
              </p>
            </div>

            <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
              <Link
                className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                to="/register"
              >
                Get started
              </Link>
              <Link
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-gray-800 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:text-white dark:hover:bg-gray-800 dark:hover:border-gray-900 dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
                to="/courses"
              >
                Explore Courses
                <BsArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
        <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6">
          <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-white">
            Start Learning the best tools and technologies
          </h2>
        </div>

        <div className="my-8 md:my-14 flex overflow-hidden select-none slider_linear gap-6 sm:gap-x-8 lg:gap-x-12">
          <div className="gap-6 sm:gap-x-8 lg:gap-x-12 slider text-xl text-gray-700 font-medium shrink-0 flex items-center justify-around whitespace-nowrap">
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={pythonIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={pythonIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={tableauIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={sqlIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={reactIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={angularIcon} className="h-12" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={nodejsIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={gitIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={awsIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={azureIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={gcpIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={javascriptIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={javaIcon} className="h-12" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={seleniumIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={excelIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={cssIcon} className="h-12" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={htmlIcon} className="h-12" />
            </div>
          </div>
          <div className="gap-6 sm:gap-x-8 lg:gap-x-12 slider text-xl text-gray-700 font-medium shrink-0 flex items-center justify-around whitespace-nowrap">
            <div className="mx-3 flex items-center justify-center gap-3">
            <img src={pythonIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={powerbiIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={tableauIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={sqlIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={reactIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={angularIcon} className="h-12" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={nodejsIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={gitIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={awsIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={azureIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={gcpIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={javascriptIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={javaIcon} className="h-12" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={seleniumIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={excelIcon} className="h-10" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={cssIcon} className="h-12" />
            </div>
            <div className="mx-3 flex items-center justify-center gap-3">
              <img src={htmlIcon} className="h-12" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
          <div className="col-span-6 text-center">
            <h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              250+
            </h4>
            <h4 className="text-sm text-gray-600 dark:text-gray-400">
              Placement Partners
            </h4>
          </div>

          <div className="col-span-6 text-center">
            <h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              120%
            </h4>
            <h4 className="text-sm text-gray-600 dark:text-gray-400">
              Avg. CTC Hike
            </h4>
          </div>

          <div className="col-start-4 col-span-6 text-center">
            <h4 className="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              30+
            </h4>
            <h4 className="text-sm text-gray-600 dark:text-gray-400">
              Courses
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
