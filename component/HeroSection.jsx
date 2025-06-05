import React from "react";

function HeroSection() {
  return (
    <div className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/db5yniogx/image/upload/v1735320654/heroimageofshantibaricloud_yevptg.jpg"
        alt="Hero Image"
        className="w-full h-full object-cover"
      />
      
      {/* Blackish opacity layer */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>

      {/* Title and Text */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl font-bold border-2 border-white p-1 backdrop-blur-md rounded-sm">
          SHANTIBARI
        </h2>
        <p className="text-xl mt-2">নারীর জন্য, নারীর পাশে</p>
      </div>
    </div>
  );
}

export default HeroSection;