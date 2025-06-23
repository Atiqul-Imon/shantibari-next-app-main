"use client"; 

import Image from "next/image";
import Link from "next/link";
import React from "react";
import psychiatristData from "@/lib/data/psychiatrists";

const formatNameForUrl = (name) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

function PsychiatristPsychologist() {
  const professionals = Object.values(psychiatristData);

  const psychiatrists = professionals.filter(p => p.title.toLowerCase().includes('psychiatrist'));
  const psychologists = professionals.filter(p => !p.title.toLowerCase().includes('psychiatrist'));

  return (
    <div className="w-full py-12 bg-gray-200">
      <div className="max-w-[1446px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 font-playfair text-gray-900">
          Our Psychiatrist and Psychologist
        </h2>

        <ProfileSection title="Psychiatrists" professionals={psychiatrists} />
        <ProfileSection title="Psychologists" professionals={psychologists} />
      </div>
    </div>
  );
}

const ProfileSection = ({ title, professionals }) => (
  <div className="w-full mb-12">
    <h3 className="text-xl font-semibold mb-4 font-playfair text-gray-800">
      {title}
    </h3>
    <div className="flex flex-wrap justify-center gap-6">
      {professionals.map((person) => (
        <ProfileCard key={person.name} person={person} />
      ))}
    </div>
  </div>
);

const ProfileCard = ({ person }) => {
  const slug = formatNameForUrl(person.name);
  return (
    <Link
      href={`/psychiatristandpsychologist/${slug}`}
      className="mb-6 p-6 bg-white rounded-xl shadow-lg flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow w-64 group"
    >
      <div className="w-36 h-36 relative mb-4">
        <Image
          src={person.imgSrc}
          alt={`${person.name}, ${person.title} at Shantibari`}
          fill
          sizes="144px"
          className="object-cover rounded-full"
        />
      </div>
      <h4 className="font-semibold text-lg font-roboto text-gray-900 group-hover:text-blue-600">
        {person.name}
      </h4>
      <p className="text-gray-600 text-sm text-center font-roboto">
        {person.title}
      </p>
    </Link>
  );
};

export default PsychiatristPsychologist;
