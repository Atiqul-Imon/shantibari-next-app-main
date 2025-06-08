import React from 'react';

const ContactUs = () => {
  // WhatsApp phone number in international format (without spaces or special characters)
  const whatsappNumber = "8801325167271";
  // Pre-filled message (optional)
  const whatsappMessage = "Hello Shantibari! I have a question...";
  
  // Generate WhatsApp link
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center py-12 px-6">
      <div className="bg-gray-50 shadow-lg rounded-lg p-8 max-w-6xl w-full transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>

        {/* Contact Information & Map Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Address</h2>
            <p className="text-gray-600 mb-2">3/1, Block # F, Lalmatia, Dhaka, Bangladesh</p>
            <p className="text-gray-600 mb-2 font-bold">Phone: +880 1325-167271</p>
            <p className="text-gray-600 mb-2 font-bold">Email: shantibari.feministfactor@gmail.com</p>
            <p className="text-gray-600 mb-6">01325167271</p>
            
            {/* WhatsApp Contact Button */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Message Us on WhatsApp</h2>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-whatsapp text-2xl mr-2"></i>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/shantibari24" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="https://twitter.com/shantibari_bd" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-600">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/shantibari24" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/shantibari-ltd/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Location</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7525685504634!2d90.3673694!3d23.7562013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf50d0b3e65d%3A0x1aea194f96079cd5!2s3%2F1%20Block%20%23%20F%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1749401385881!5m2!1sen!2sbd"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shantibari Location on Google Map"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* WhatsApp Contact Section */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Prefer WhatsApp?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Click the button below to start a conversation with us directly on WhatsApp. 
           
          </p>
          
          <div className="flex justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
            >
              <i className="fab fa-whatsapp text-3xl mr-3"></i>
              <span>Message Us on WhatsApp</span>
            </a>
          </div>
          
          <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200 max-w-2xl mx-auto">
            <h3 className="font-bold text-green-800 mb-2">How WhatsApp messaging works:</h3>
            <ol className="list-decimal list-inside text-left text-gray-700 space-y-1">
              <li>Click the WhatsApp button above</li>
              <li>Your WhatsApp app will open automatically</li>
              <li>You'll see a pre-filled message (feel free to edit it)</li>
              <li>Press send and we'll respond as soon as possible</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;