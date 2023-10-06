import React from "react";
import Modules from '../CourseDetails/Modules';

const Mod = () => {
    const modulesData = [
        {
          index:1,
          title: "Module 1: Introduction to Data Science",
          duration: "7 hours",
          rating: "4.7 (6587 reviews)",
          description: ["Define data science and its importance in today’s data-driven world.", 
          "Describe the various paths that can lead to a career in data science.", 
          "Summarize  advice given by seasoned data science professionals to data scientists who are just starting out.",
          "Explain why data science is considered the most in-demand job in the 21st century."],
          skills: ["Predictive Modelling", "Python Programming", "Data Analysis", "Data Visualization (DataViz)", "Model Selection"],
        },
        {
          index:2,
          title: "Module 2: Tools for Data Science",
          duration: "17 hours",
          rating: "4.5 (1234 reviews)",
          description: ["Describe the Data Scientist’s tool kit which includes: Libraries & Packages, Data sets, Machine learning models, and Big Data tools.",
           "Utilize languages commonly used by data scientists like Python, R, and SQL.", "Demonstrate working knowledge of tools such as Jupyter notebooks and RStudio and utilize their various features.",
        "Create and manage source code for data science using Git repositories and GitHub."],
          skills: ["Data Science", "Github", "Python Programming", "Jupyter notebooks", "Rstudio"],
        },
        // Add more module data as needed
      ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    Professional Certificate - 10 course series
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Prepare for a career in the high-growth field of data
                    science. In this program, you’ll develop the skills, tools,
                    and portfolio to have a competitive edge in the job market
                    as an entry-level data scientist in as little as 5 months.
                  </p>
                </div>
              </div>

              {modulesData.map((course, index) => (
                <Modules
                  key={index}
                  title={course.title}
                  duration={course.duration}
                  rating={course.rating}
                  description={course.description}
                  skills={course.skills}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mod;
