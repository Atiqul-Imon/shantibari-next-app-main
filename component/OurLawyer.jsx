"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import lawyerData from "@/lib/data/lawyers";

function LawyerCard({ name, title, imgSrc }) {
  return (
    <div className="w-60 h-[340px] p-4 bg-white rounded-xl flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40 w-40 rounded-full overflow-hidden border-gray-300">
        <Image
          src={imgSrc}
          alt={`${name}, ${title} at Shantibari`}
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>
      <div className="p-3 text-center">
        <h3 className="font-bold text-lg font-roboto text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 font-roboto">{title}</p>
      </div>
    </div>
  );
}

export default function OurLawyers() {
  return (
    <div className="bg-gray-200 w-full flex justify-center items-center py-12">
      <div className="w-full max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair text-gray-900">
          Our Lawyers
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {Object.entries(lawyerData).map(([id, lawyer]) => (
            <Link key={id} href={`/lawyers/${id}`}>
              <LawyerCard
                name={lawyer.name}
                title={lawyer.title}
                imgSrc={lawyer.imgSrc}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
