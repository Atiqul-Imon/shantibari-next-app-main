import React from "react";
import Link from "next/link";
import {
  FaBrain,
  FaGavel,
  FaChalkboardTeacher,
  FaPaintBrush,
  FaChild,
} from "react-icons/fa";


function OurServices() {
  const services = [
    {
      title: "Mental Health Support",
      description:
        "Provides psycho-social counseling and therapy, psychiatric treatment, yoga sessions, etc. by specialized professionals, both offline and online.",
       link: "/services/mental-health-support", 
      icon: <FaBrain size={40} />,
    },
    {
      title: "Legal Advice and Services",
      description:
        "Serves legal support to women, especially in family issues in the comfortable environment of Shantibari.",
      link: "/services/legal-advice-and-services", // Updated link
      icon: <FaGavel size={40} />,
    },
    {
      title: "Entrepreneurial Support Program",
      description:
        "Provides a suitable platform, mentorship, and resources to women entrepreneurs to start and grow their businesses.",
      link: "/services/entrepreneurial-support-program", // Updated link
      icon: <FaChalkboardTeacher size={40} />,
    },
    {
      title: "Cultural Development Program",
      description:
        "Encourage and nurture creativity and innovation among women by organizing events on different forms of artistic expression.",
      link: "/services/cultural-development-program", // Updated link
      icon: <FaPaintBrush size={40} />,
    },
    {
      title: "Parenting Support",
      description:
        "For women, one of the additional services at Shantibari is Child Development and Parenting Consultation.",
      link: "/services/parenting-support", // Updated link
      icon: <FaChild size={40} />,
    },
  ];

  return (
    <div className="w-full py-12 bg-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 font-playfair text-gray-800">
          Our Services
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex-1 min-w-[280px] max-w-[380px] p-6 bg-white rounded-lg shadow-lg`}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 font-roboto text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 font-roboto">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all duration-300 ease-in-out"
              >
                Visit Here
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurServices;