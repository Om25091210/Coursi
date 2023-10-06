import React from "react";
import Programming from "../../assets/Landing/Programming.png";
import Database from "../../assets/Landing/database.png";
import Web from "../../assets/Landing/web.png";
import DSA from "../../assets/Landing/dsa.png";
import AI from "../../assets/Landing/ai.png";
import { Link } from "react-router-dom";

const Foundation = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="uppercase text-center max-width-sm text-gray-600 text-sm tracking-widest font-bold">
          <p>Explore the CourSi way</p>
        </div>
        <div className="flex flex-col relative items-center justify-center">
          <span className="h-24 w-px bg-blue-gradient"></span>
          <div className="max-w-3xl flex flex-col justify-center items-center mb-3">
            <span className="inline-flex rounded-full text-white w-10 h-10 font-bold items-center justify-center mb-3 bg-blue-gradient-1">
              1
            </span>
            <h3 className="text-3xl m-0 font-bold bg-blue-gradient-text">
              Start
            </h3>
          </div>
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 px-4">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
              Foundation Track
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">
              Our programs are led by industry experts who have a deep
              understanding of the skills and knowledge that are in-demand in
              today's job market.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="bg-hover-gray-parent sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3 ">
            <div
              className="border group relative block rounded-xl overflow-hidden"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={Programming}
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <div className="bg-hover-gray text-sm font-bold rounded-lg p-4 md:text-xl text-gray-800 bg-gray-200/[.7]">
                  Programming Language
                </div>
              </div>
            </div>
          </div>

          <div className="bg-hover-gray-parent sm:self-end col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-4">
            <div
              className="border group relative block rounded-xl overflow-hidden"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={Database}
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <div className="bg-hover-gray text-sm font-bold rounded-lg p-4 md:text-xl text-gray-800 bg-gray-200/[.7]">
                  Database
                </div>
              </div>
            </div>
          </div>

          <div className="bg-hover-gray-parent col-span-12 md:col-span-4">
            <div
              className="border group relative block rounded-xl overflow-hidden"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={AI}
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <div className="bg-hover-gray text-sm font-bold rounded-lg p-4 md:text-xl text-gray-800 bg-gray-200/[.7]">
                  Data Analytics and AI
                </div>
              </div>
            </div>
          </div>

          <div className="bg-hover-gray-parent col-span-12 sm:col-span-6 md:col-span-4">
            <div
              className="border group relative block rounded-xl overflow-hidden"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={Web}
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <div className="bg-hover-gray text-sm font-bold rounded-lg p-4 md:text-xl text-gray-800 bg-gray-200/[.7]">
                  Web Development
                </div>
              </div>
            </div>
          </div>

          <div className="bg-hover-gray-parent col-span-12 sm:col-span-6 md:col-span-4">
            <div
              className="border group relative block rounded-xl overflow-hidden"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={DSA}
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <div className="bg-hover-gray text-sm font-bold rounded-lg p-4 md:text-xl text-gray-800 bg-gray-200/[.7]">
                  Data Structures and Algorithms
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-16">
        <div class="inline-block bg-white border border-blue-600 shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
          <div class="py-3 px-4 flex items-center gap-x-2">
            <p class="text-gray-600 dark:text-gray-400">Want to read more?</p>
            <Link
              class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
              to="/"
            >
              Go here
              <svg
                class="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
