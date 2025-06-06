import React from "react";
import Link from "next/link";

function LegalAdviceDetails() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <img
          src="https://res.cloudinary.com/db5yniogx/image/upload/v1736942344/legalservicescloud_tm2nqv.jpg" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold font-playfair">
            Legal Advice and Services
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        <p className="text-gray-800 font-roboto mb-6 leading-7 text-lg">
          Legal advice and services play a crucial role in ensuring individuals
          have access to justice and the protection of their rights within a
          legal framework. Legal professionals, such as lawyers and attorneys,
          provide guidance, representation, and expertise in various areas of
          law to assist individuals, businesses, and organizations in navigating
          complex legal matters.
        </p>

        {/* Images in Description */}
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          <img
            src="https://res.cloudinary.com/db5yniogx/image/upload/v1736942344/legalservicescloud_tm2nqv.jpg" // Replace with your image URL
            alt="Legal Support"
            className="w-[45%] rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          />
          <img
            src="https://res.cloudinary.com/db5yniogx/image/upload/v1736942110/legalserviceimagecloud_wzeumb.jpg" // Replace with your image URL
            alt="Consultation"
            className="w-[45%] rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          />
        </div>

        <p className="text-gray-800 font-roboto leading-7 text-lg">
          One of the primary functions of legal advice is to help individuals
          understand their rights and obligations under the law. Legal
          professionals assess specific situations, interpret relevant laws, and
          provide advice on the best course of action. Whether it’s personal
          matters like family law, estate planning, or criminal defense, or
          business-related issues like contracts, intellectual property, or
          employment law, seeking legal advice can help individuals make
          informed decision and mitigate potential risks.
        </p>
      </div>

      {/* Our Lawyers Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-[1440px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-playfair text-gray-800">
            Meet Our Lawyers
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Lawyer Card 1 */}
            <div className="w-[300px] p-6 bg-white rounded-lg shadow-lg text-center">
              <img
                src="https://res.cloudinary.com/db5yniogx/image/upload/v1735494831/nahidshamsshantibaricloud_wqbzwp.jpg" // Replace with the lawyer's image URL
                alt="Adv. Nahid Shams"
                className="w-40 h-40 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Adv. Nahid Shams
              </h3>
              <p className="text-gray-600 font-roboto">
                Advocate, Supreme Court of Bangladesh
              </p>
            </div>

            {/* Lawyer Card 2 */}
            <div className="w-[300px] p-6 bg-white rounded-lg shadow-lg text-center">
              <img
                src="https://res.cloudinary.com/db5yniogx/image/upload/v1735314212/Adv-Fahriya-Ferdousecloud_sk71zm.jpg" // Replace with the lawyer's image URL
                alt="Adv. Fahriya Ferdous"
                className="w-40 h-40 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Adv. Fahriya Ferdous
              </h3>
              <p className="text-gray-600 font-roboto">
                Advocate, Supreme Court of Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LegalAdviceDetails;