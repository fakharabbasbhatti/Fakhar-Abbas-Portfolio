import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Animation occurs only once while scrolling
    });
  }, []);

  return (
    <div className="bg-black text-white py-10" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 
          className="text-4xl font-bold text-center mb-12 hover:text-[#ff2359] cursor-pointer"
          data-aos="fade-up" // AOS animation
        >
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index} // Use index as key if no unique ID
              className="bg-gray-800 hover:bg-[#2356ff] px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
              data-aos="fade-up" // AOS animation
              data-aos-delay={index * 100} // Add staggered delay
            >
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
