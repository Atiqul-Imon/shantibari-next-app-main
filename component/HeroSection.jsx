import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section
      className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px]"
      aria-label="Hero banner"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpeg"
        

        alt="Shantibari banner showing support for women"
        fill
        className="object-cover"
        priority
      />

      {/* Black overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>

      {/* Title and Text */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl font-bold border-2 border-white p-1 backdrop-blur-md rounded-sm">
          SHANTIBARI
        </h1>
        <p className="text-xl mt-2">নারীর জন্য, নারীর পাশে</p>
      </div>
    </section>
  );
}

export default HeroSection;
