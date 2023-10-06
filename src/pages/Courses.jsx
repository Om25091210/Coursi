import React from 'react'
import Hero from '../components/Landing/Hero'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Features from '../components/Landing/Features'
import Foundation from '../components/Landing/Foundation'
import Specialization from '../components/Landing/Specialization'
import Support from '../components/Landing/Support'
import Subscribe from '../components/Landing/Subscribe'
import Card from '../components/Courses/Card'

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
  } from "../assets/index";

const courseData = [
    { id:1,icon: pythonIcon, title: 'Python', description: 'Everything you need to program in Python in one course(includes 3 real- world projects)' },
    { id:2,icon: powerbiIcon, title: 'PowerBI', description: 'Everything you need to program in Python in one course(includes 3 real- world projects)' },
];

const Courses = () => {
  return (
    <div>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseData.map((course, index) => (
          <Card
            key={index}
            id={course.id}
            icon={course.icon}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Courses