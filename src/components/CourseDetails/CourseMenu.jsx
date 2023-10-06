import React from 'react';

const CourseMenu = () => {
  const menuItems = [
    { label: 'About', sectionId: 'about-section' },
    { label: 'Outcomes', sectionId: 'outcomes-section' },
    { label: 'Courses', sectionId: 'courses-section' },
    { label: 'Testimonials', sectionId: 'testimonials-section' },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="ms-12 flex space-x-4">
      {menuItems.map((item) => (
        <div
          key={item.sectionId}
          className="relative cursor-pointer transition duration-300 ease-in-out hover:bg-blue-500"
          onClick={() => scrollToSection(item.sectionId)}
        >
          <span className="block px-4 py-2">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CourseMenu;
