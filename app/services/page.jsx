import React from "react";
import Link from "next/link";
import {
  FaBrain,
  FaGavel,
  FaChalkboardTeacher,
  FaPaintBrush,
  FaChild,
} from "react-icons/fa";

export const metadata = {
  title: "Our Services - Shantibari | Comprehensive Support for Women in Bangladesh",
  description: "Discover Shantibari's holistic services: Mental health support, legal advice, entrepreneurial programs, cultural development, and parenting resources for women.",
  keywords: "women services Bangladesh, mental health counseling, legal advice Dhaka, entrepreneurial support, cultural programs, parenting resources",
  
  alternates: {
    canonical: "https://shantibaribd.org/services",
  },
  
  openGraph: {
    title: "Our Services - Shantibari",
    description: "Holistic support services for women in Bangladesh including mental health, legal advice, business incubation, and cultural development",
    images: [
      {
        url: "https://res.cloudinary.com/db5yniogx/image/upload/v1736942344/legalservicescloud_tm2nqv.jpg",
        width: 1200,
        height: 630,
        alt: "Shantibari Services Overview",
      },
    ],
    url: "https://shantibaribd.org/services",
    type: "website",
    locale: "en_BD",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Shantibari",
    description: "Empowering women in Bangladesh through mental health, legal, entrepreneurial, and cultural support services",
    images: ["https://res.cloudinary.com/db5yniogx/image/upload/v1736942344/legalservicescloud_tm2nqv.jpg"],
    site: "@shantibari_bd",
  },
};

function OurServices() {
  const services = [
    {
      title: "Mental Health Support",
      description:
        "Provides psycho-social counseling and therapy, psychiatric treatment, yoga sessions, etc. by specialized professionals, both offline and online.",
      link: "/services/mental-health-support",
      icon: <FaBrain className="text-blue-600" size={40} />,
    },
    {
      title: "Legal Advice and Services",
      description:
        "Serves legal support to women, especially in family issues in the comfortable environment of Shantibari.",
      link: "/services/legal-advice-and-services",
      icon: <FaGavel className="text-purple-600" size={40} />,
    },
    {
      title: "Entrepreneurial Support Program",
      description:
        "Provides a suitable platform, mentorship, and resources to women entrepreneurs to start and grow their businesses.",
      link: "/services/entrepreneurial-support-program",
      icon: <FaChalkboardTeacher className="text-green-600" size={40} />,
    },
    {
      title: "Cultural Development Program",
      description:
        "Encourage and nurture creativity and innovation among women by organizing events on different forms of artistic expression.",
      link: "/services/cultural-development-program",
      icon: <FaPaintBrush className="text-red-600" size={40} />,
    },
    {
      title: "Parenting Support",
      description:
        "For women, one of the additional services at Shantibari is Child Development and Parenting Consultation.",
      link: "/services/parenting-support",
      icon: <FaChild className="text-yellow-600" size={40} />,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Shantibari Services",
    "description": "Comprehensive support services for women in Bangladesh",
    "url": "https://shantibaribd.org/services",
    "numberOfItems": 5,
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "url": `https://shantibaribd.org${service.link}`
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="w-full py-16 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 font-playfair text-gray-800">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering women in Bangladesh through specialized support programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gray-100 p-4 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <Link
                      href={service.link}
                      className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Explore Service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </div>
    </>
  );
}

export default OurServices;