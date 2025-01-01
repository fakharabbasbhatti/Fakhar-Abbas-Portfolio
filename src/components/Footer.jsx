import React, { useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa"; // Import the close icon

const Footer = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(null); // Manage the alert state

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Log the email to the console (for debugging or tracking)
    console.log("Email entered: ", email);

    // Basic email validation
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (emailRegex.test(email)) {
      setAlert({ type: "success", message: "Subscribed successfully!" });
      // Optionally log success message
      console.log("Subscription successful!");
    } else {
      setAlert({ type: "error", message: "Please enter a valid email address." });
      // Log error message
      console.log("Invalid email entered.");
    }

    // Clear the input after submitting
    setEmail("");
  };

  const handleCloseAlert = () => {
    setAlert(null); // Close the alert
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 hover:text-[#ff2359] cursor-pointer">BHATTI</h3>
            <p className="text-gray-400">
              Frontend Developer based in the PAK, specializing in web and software development.
            </p>
          </div>

          {/* Subscribe Field */}
          <div className="flex-1 w-full">
            <form onSubmit={handleSubscribe} className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 
                py-2 rounded-r-lg transform transition-transform duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>

            {/* Display alert message */}
            {alert && (
              <div
                className={`mt-4 p-2 rounded ${alert.type === "success" ? "bg-green-500" : "bg-red-500"} text-white flex justify-between items-center`}
              >
                <span>{alert.message}</span>
                <button onClick={handleCloseAlert} className="text-white ml-2">
                  <FaTimes />
                </button>
              </div>
            )}
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} <span className="hover:text-[#ff2359]">BHATTI</span>. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.facebook.com/people/Ghulam-Abbas-Ghulam-Abbas/pfbid032SA5RZCdqJTVWDUk1evJ5zYCZwQ4xKwD5xYAkxvDwv2eMk8VNEAzDoAcWuUA6K96l/" className="text-gray-400 hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://github.com/fakharabbasbhatti" className="text-gray-400 hover:text-yellow-600" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.tiktok.com/@fakharbhatti333?_t=8sg73eoTW0O&_r=1" className="text-gray-400 hover:text-green-500">
              <FaTiktok />
            </a>
          </div>
          <div className="flex space-x-4 cursor-pointer">
            <a  className="text-gray-400 hover:text-[#ff2359]">
              BHATTI
            </a>
            <a className="text-gray-400 hover:text-[#ff2359]">
              RANA & SHAH
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
