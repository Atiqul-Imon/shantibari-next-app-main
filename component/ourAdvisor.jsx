import React from "react";
import Link from "next/link";

function OurAdvisors() {
  const advisors = [
    {
      id: 1,
      name: "Dr. Nazmun N. Ratna",
      title: "Associate Professor, Lincoln University",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/v1735313976/Nazmunratnacloud_bzwbmn.png",
    },
    {
      id: 2,
      name: "Anirban Bhowmik",
      title: "Development Expert",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/v1735314046/Anirbanbhowmikcloud_qvfqjx.png",
    },
  ];

  return (
    <div className="bg-gray-100 w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Advisors</h1>

        <div className="flex flex-wrap gap-6 justify-center">
          {advisors.map(({ id, name, title, imgSrc }) => (
            <Link
              key={id}
              href={`/advisor/${id}`}
              className="w-60 h-80 bg-white rounded-xl flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              {/* Image */}
              <img
                className="h-40 w-40 object-cover rounded-full border-gray-300 mt-4"
                src={imgSrc}
                alt={name}
              />

              {/* Name and Title */}
              <div className="flex flex-col justify-center items-center px-4 py-3 flex-grow">
                <h2 className="font-bold text-lg text-center w-full text-gray-900 truncate">
                  {name}
                </h2>
                <p className="text-sm text-gray-600 text-center w-full mt-1  line-clamp-2">
                  {title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurAdvisors;
