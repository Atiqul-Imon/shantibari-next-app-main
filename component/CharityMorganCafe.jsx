import React from "react";

function CharityMorganCafe() {
  return (
    <div className="w-full bg-white py-12 flex items-center justify-center">
      <div className="max-w-[1440px] w-full px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 font-playfair text-gray-800">
          Charity Morgan Cafe
        </h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow-xl overflow-hidden">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-[350px] md:h-[400px] mb-6 md:mb-0">
            <img
              src="https://res.cloudinary.com/db5yniogx/image/upload/v1735324070/charitymorgancafecloud1_dorcjx.jpg"
              alt="Charity Morgan Cafe"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left p-8">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-roboto">
              Charity Morgan Cafe, a delightful vegetarian eatery, is a proud initiative of Shantibari, an organization
              dedicated to women's wellbeing. This cafe not only serves delectable plant-based dishes but also empowers 
              women by providing them with employment opportunities and vocational training. By promoting
              healthy, ethical, and sustainable dining choices, Charity Morgan Cafe plays a crucial role in 
              fostering a sense of community and compassion. The cafe hosts regular workshops 
              and events focused on women's health and empowerment, creating a nurturing 
              space for all who visit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharityMorganCafe;