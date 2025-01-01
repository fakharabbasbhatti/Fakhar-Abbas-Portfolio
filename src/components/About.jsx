import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import AboutImage from "../assets/fakhar.jpeg";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2
          className="text-4xl font-bold text-center mb-12 hover:text-[#ff2359] cursor-pointer"
          data-aos="fade-up" // AOS animation
        >
          About Me
        </h2>
        <div
          className="flex flex-col md:flex-row items-center md:space-x-12"
          data-aos="fade-right" // AOS animation
        >
          <img
            src={AboutImage}
            alt="fakhar"
            className="w-72 h-80 rounded object-cover border-2 border-gray-500 mb-8 md:mb-0 transform 
            transition-transform duration-300 hover:scale-105"
          />
          <div
            className="flex-1"
            data-aos="fade-left" // AOS animation
          >
            <p className="text-lg mb-8">
              I am a passionate Frontend Developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="space-y-4">
              {/* HTML & CSS Skill */}
              <div
                className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <label htmlFor="htmlandcss" className="w-full sm:w-2/12 text-center sm:text-left">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
        transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>

              {/* React JS Skill */}
              <div
                className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <label htmlFor="reactjs" className="w-full sm:w-2/12 text-center sm:text-left">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-red-500 to-yellow-500 h-2.5 rounded-full 
        transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>

              {/* JavaScript Skill */}
              <div
                className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <label htmlFor="javascript" className="w-full sm:w-2/12 text-center sm:text-left">
                  JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-gray-500 to-white h-2.5 rounded-full 
        transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>

            <div
              className="mt-12 flex justify-between text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  01+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  50+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
