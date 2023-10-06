import React from 'react'

const Subscribe = () => {
  return (
    <div>
        <div className="max-w-6xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
      <div className="bg-gray-100 relative rounded-xl p-5 sm:py-16 before:absolute before:top-0 before:left-0 before:bg-no-repeat before:bg-top before:bg-contain before:w-2/3 before:h-full before:z-0 dark:bg-[#151c2f]">
        <div className="max-w-xl relative z-10 text-center mx-auto">
          <div className="mb-5">
            <h2 className="text-2xl font-bold md:text-3xl dark:text-white">Subscribe</h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400">Get all the latest Preline updates and news.</p>
          </div>
          <a className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4" href="#">
                Get started
                <svg className="w-3 h-3" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Subscribe