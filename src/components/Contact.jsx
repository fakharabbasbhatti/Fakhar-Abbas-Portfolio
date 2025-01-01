import React, { useEffect, useState } from 'react';
import { FaEnvelope,FaPhone } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Trigger animation only once
    });
  }, []);

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for alert visibility
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      // Show alert for incomplete data
      setAlertMessage('Please fill out all fields before submitting.');
      setAlertVisible(true);
      return; // Prevent form submission
    }

    // If all fields are filled, proceed with form submission
    console.log('Form Data:', formData);

    // Show success alert
    setAlertMessage('Message sent successfully!');
    setAlertVisible(true);

    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Auto-hide the alert after 3 seconds
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2
          className="text-4xl font-bold text-center mb-12 hover:text-[#ff2359] cursor-pointer"
          data-aos="fade-up"
        >
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div
            className="flex-1"
            data-aos="fade-right"
          >
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4"
            >
              Let's Talk
            </h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className="mb-4 mt-8 flex items-center justify-start md:justify-start">
              <FaEnvelope className="inline-block text-green-400 hover:text-yellow-400 mr-2" />
              <a
                href="fakharabbasbhatti333@gmail.com"
                className="text-sm md:text-base hover:underline"
              >
                fakharabbasbhatti333@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 hover:text-blue-400 mr-2" />
              <span>+92 308-6046246</span>
            </div>
            <div className="mb-4">
              <FaLocationDot className="inline-block text-green-400 hover:text-red-500 mr-2" />
              <span>Dilawar Colony street no 4, BAHAWALPUR</span>
            </div>
          </div>
          <div
            className="flex-1 w-full"
            data-aos="fade-left"
          >
            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white 
                transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        {/* Alert Section */}
        {alertVisible && (
          <div
            className={`fixed bottom-4 right-4 text-white px-4 py-2 rounded shadow-lg flex items-center space-x-4 ${alertMessage === 'Please fill out all fields before submitting.' ? 'bg-red-500' : 'bg-green-500'}`}
          >
            <span>{alertMessage}</span>
            <button
              className="text-white font-bold"
              onClick={() => setAlertVisible(false)}
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
