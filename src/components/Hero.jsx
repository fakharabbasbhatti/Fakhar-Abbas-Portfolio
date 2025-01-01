import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroImage from '../assets/fakhar.jpeg';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='bg-black text-white text-center py-16' id="home">
      <img
        src={HeroImage}
        alt=""
        className='mx-auto mb-8 w-48 h-48 border-2 border-gray-500 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'
       
      />
      <h1
        className='text-4xl font-bold'
        data-aos="fade-up" // AOS animation
      >
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Fakhar Abbas
        </span>
        , Frontend Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300' data-aos="fade-up" data-aos-delay="200">
        I specialize in building modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-4' data-aos="fade-up" data-aos-delay="400">
        <button
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          More Read
        </button>
      </div>
    </div>
  );
};

export default Hero;
