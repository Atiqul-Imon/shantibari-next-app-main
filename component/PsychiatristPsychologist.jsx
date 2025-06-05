"use client"; 

import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

function PsychiatristPsychologist() {
  const router = useRouter();

  const psychiatrists = [
    {
      id: 1,
      name: "Dr. Helal Uddin Ahmed",
      title: "Senior Psychiatrist and Consultant",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1740936031/drhelalcloud_fvdddg234-removebg-preview_1_dvcph6.png",
    },
    {
      id: 2,
      name: "Dr. Nasim Jahan",
      title: "Senior Psychiatrist and Consultant",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1740936189/Nasimjahancloud-removebg-preview_ppm0qa.png",
    },
  ];

  const psychologists = [
    {
      id: 3,
      name: "Razia Sultana Rima",
      title: "Psycho-social Counselor and Therapist",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1741159194/RaziasultanaRima2_uganzq.jpg",
    },
    {
      id: 4,
      name: "M S Mahmuda",
      title: "Mental Health Specialist",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1740935356/msmahmuda21_zjtg1o.jpg",
    },
    {
      id: 5,
      name: "Tanzina Chowdhury",
      title: "Educational and Counselling Psychologist",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1740935709/tanzina234_dz2ggx.jpg",
    },
    {
      id: 6,
      name: "Arpita Das",
      title: "Psycho-social Counselor and Therapist",
      imgSrc:
        "https://res.cloudinary.com/db5yniogx/image/upload/v1735317781/Arpitadascloud_gdnt8q.png",
    },
  ];

  const formatNameForUrl = (name) =>
    name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  const handleCardClick = (name) => {
    const formattedName = formatNameForUrl(name);
    router.push(`/profile/${formattedName}`);
  };

  return (
    <div className="w-full py-12 bg-gray-200">
      <div className="max-w-[1446px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 font-playfair text-gray-900">
          Our Psychiatrist and Psychologist
        </h2>

        <ProfileSection
          title="Psychiatrists"
          professionals={psychiatrists}
          onCardClick={handleCardClick}
        />

        <ProfileSection
          title="Psychologists"
          professionals={psychologists}
          onCardClick={handleCardClick}
        />
      </div>
    </div>
  );
}

const ProfileSection = ({ title, professionals, onCardClick }) => (
  <div className="w-full mb-12">
    <h3 className="text-xl font-semibold mb-4 font-playfair text-gray-800">
      {title}
    </h3>
    <div className="flex flex-wrap justify-center gap-6">
      {professionals.map((person) => (
        <ProfileCard
          key={person.id}
          person={person}
          onClick={() => onCardClick(person.name)}
        />
      ))}
    </div>
  </div>
);

const ProfileCard = ({ person, onClick }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyPress={(e) => e.key === "Enter" && onClick()}
    className="mb-6 p-6 bg-white rounded-xl shadow-lg flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow w-64"
  >
    <div className="w-36 h-36 relative mb-4">
      <Image
        src={person.imgSrc}
        alt={person.name}
        layout="fill"
        className="object-cover rounded-full"
      />
    </div>
    <h4 className="font-semibold text-lg font-roboto text-gray-900">
      {person.name}
    </h4>
    <p className="text-gray-600 text-sm text-center font-roboto">
      {person.title}
    </p>
  </div>
);

export default PsychiatristPsychologist;
