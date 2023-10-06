import React from "react";
import Navbar from "../components/common/Navbar";

import { useParams } from "react-router-dom";
import BasicDetails from "../components/CourseDetails/basicDetails";
import AdditionalDetails from "../components/CourseDetails/AdditionalDetails";
import CourseMenu from "../components/CourseDetails/CourseMenu";
import General from "../components/CourseDetails/General";
import Resources from "../components/CourseDetails/Resources";
import Mod from "../components/CourseDetails/Mod";
import Testimonials from "../components/CourseDetails/Testimonials";
import FAQ from "../components/CourseDetails/FAQ";
import Footer from "../components/CourseDetails/Footer";

const CourseDetailsPage = () => {
  const { courseId } = useParams(); // Get the course ID from the URL
  // Define an array of skills (example data)
  const skills = [
    "Data Analysis",
    "Python",
    "SQL",
    "Machine Learning",
    "Data Visualization",
    "Deep Learning",
    "Numpy",
    "Pandas",
  ];

  // Fetch course details based on courseId and display them

  return (
    <div>
      <Navbar />
      <BasicDetails />
      <CourseMenu />
      <AdditionalDetails skills={skills} />
      <General />
      <Resources />
      <Mod />
      <Testimonials />
      <FAQ />
      <Footer/>
    </div>
  );
};

export default CourseDetailsPage;
