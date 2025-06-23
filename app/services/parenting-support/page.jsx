import React from "react";

export const metadata = {
  title: "Parenting Support - Shantibari",
  description: "Shantibari offers expert parenting support and child development consultations. Schedule a session with our experienced consultants to ensure the best outcomes for your family.",
  keywords: "parenting support Bangladesh, child development, parenting consultation Dhaka, family support services, child well-being",
  
  alternates: {
    canonical: "https://shantibaribd.org/services/parenting-support",
  },
  
  openGraph: {
    title: "Parenting Support - Shantibari",
    description: "Expert consultations on parenting and child development for families in Bangladesh.",
    images: [
      {
        url: "https://res.cloudinary.com/db5yniogx/image/upload/v1736946117/parent_hl9ibo.jpg",
        width: 1200,
        height: 630,
        alt: "Parenting Support at Shantibari",
      },
    ],
    url: "https://shantibaribd.org/services/parenting-support",
    type: "website",
    locale: "en_BD",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Parenting Support - Shantibari",
    description: "Get expert advice on parenting and child development from Shantibari's experienced consultants.",
    images: ["https://res.cloudinary.com/db5yniogx/image/upload/v1736946117/parent_hl9ibo.jpg"],
    site: "@shantibari_bd",
  },
};

function ParentingSupportDetails() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[450px]">
        <img
          src="https://res.cloudinary.com/db5yniogx/image/upload/v1736946117/parent_hl9ibo.jpg" // Replace with your hero image URL
          alt="Parenting Support"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold font-playfair tracking-wide drop-shadow-lg">
            Parenting Support
          </h1>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex justify-center mb-12">
          <img
            src="https://res.cloudinary.com/db5yniogx/image/upload/v1736945672/parentingsupportcloud_lw2r2u.jpg" // Replace with your image URL
            alt="Parenting Support"
            className="w-[90%] md:w-[75%] rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-[1000px] mx-auto px-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 font-playfair mb-4">
            About Parenting Support
          </h2>
          <div className="w-[100px] h-[3px] bg-blue-600 mx-auto"></div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 font-roboto leading-8 text-lg mb-6">
            For Women, one of the additional services at the "Shantibari" is
            Child development and Parenting Consultation. Shantibari is eager to
            provide every essential service needed at every stage of a woman's
            life. The organization places great importance on the role of both
            parents, especially for the development of the child. Shantibari
            offers assistance and advice to parents.
          </p>
          <p className="text-gray-700 font-roboto leading-8 text-lg">
            Competent, professional, and experienced child development and
            parenting consultants are available for one-on-one sessions with
            parents at Shantibari. Parents are encouraged to schedule
            appointments and avail themselves of this service to ensure the best
            possible outcomes for their families.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ParentingSupportDetails;