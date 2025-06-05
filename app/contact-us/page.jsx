import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 flex flex-col justify-center items-center py-12 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Address</h2>
          <p className="text-gray-600 mb-2">3/1, Block # F, Lalmatia, Dhaka, Bangladesh</p>
          <p className="text-gray-600 mb-2 font-bold">Phone: +880 1325-167271</p>
          <p className="text-gray-600 mb-2 font-bold">Email: shantibari.feministfactor@gmail.com</p>
          <p className="text-gray-600">01325167271</p>
        </div>

        {/* Contact Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-200"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;