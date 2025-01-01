import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const EmailJs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_kopehlf', // Replace with your actual Service ID
        'template_correct_id', // Replace with the correct Template ID
        form.current,
        '0b6Fl2L4smN0KfWBs' // Replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send the message. Please check the template ID and try again.');
        }
      );

    // Clear form fields after submission
    form.current.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md mx-auto"
    >
      <div className="mb-4">
        <label className="block text-white font-semibold mb-2">Name</label>
        <input
          type="text"
          name="from_name"
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white font-semibold mb-2">Email</label>
        <input
          type="email"
          name="from_email"
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white font-semibold mb-2">Message</label>
        <textarea
          name="message"
          rows="4"
          className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
          placeholder="Write your message"
          required
        ></textarea>
      </div>

      <div className="text-center">
        <input
          type="submit"
          value="Send"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-6 rounded-lg cursor-pointer hover:scale-105 transform transition-transform duration-300"
        />
      </div>
    </form>
  );
};

export default EmailJs;
