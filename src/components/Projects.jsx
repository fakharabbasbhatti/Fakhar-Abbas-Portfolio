import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import employeeImage from "../assets/employee.webp";
import  bolgImage from "../assets/blog.jpg";
import laptopbook from "../assets/code.avif";

const projects = [
  {
    id: 1,
    name: "Employee MS",
    technologies: "MERN Stack",
    image: employeeImage,
    github: "https://github.com/fakharabbasbhatti",
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "MERN Stack",
    image: bolgImage,
    github: "https://github.com/fakharabbasbhatti",
  },
  {
    id: 3,
    name: "Coding JS",
    technologies: "MERN Stack",
    image: laptopbook,
    github: "https://github.com/fakharabbasbhatti",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Animation triggers only once on scroll
    });
  }, []);

  return (
    <div className="bg-black text-white py-10" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 
          className="text-4xl font-bold text-center mb-12 hover:text-[#ff2359] cursor-pointer" 
          data-aos="fade-up"
        >
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-800 hover:bg-[#2356ff] p-6 rounded-lg hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Staggered animation delay
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
                data-aos="zoom-in" // AOS animation for images
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
