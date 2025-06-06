"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import React from "react";

const data = {
  "dr-helal-uddin-ahmed": {
    name: "Dr. Helal Uddin Ahmed",
    title: "Senior Psychiatrist and Consultant",
    description: `MBBS, MD (Psychiatry)
Associate Professor - Child Adolescent & Family Psychiatry
Department - Psychiatry and Mental Health
 Graduated on 1999 from Chittagong Medical College and completed MD (Psychiatry) on 2011 from Bangabandhu Sheikh Mujib Medical University, Dhaka.
Received fellowship training on Child Psychiatry from ‘Fondazione Child’, Italy and trained on ‘Autism and Neurodevelopmental disabilities’ from South Korea. He also received fellowship from Japanese Society of Psychiatry and Neurology (JSPN-Fellow) on 2010, Indo-Global Psychiatric Initiative fellowship (IGPI Fellow) on 2011 and ‘Y-Mind Fellowship’ from Sao Paulo-Brazil on 2013. Dr. Ahmed worked as a Temporary Advisor of WHO Bangladesh, in the field of mental health and substance abuse for a short tenure on 2012. He is the Area Coordinator of Australasia region of Early Career Psychiatrists Council of WPA (World Psychiatric Association).
He has 42 publications as author or co-author and presented 11 scientific papers in international conferences held in Bangladesh, Argentina, Japan, South Korea, Indonesia, India, Brazil, Italy and Spain.
Dr. Ahmed has more than 200 popular write up on mental health issue, published in national daily and weekly newspapers. In 2013 He received “Prof. Hidayetul Islam Gold Medal Award” for research contribution and devotion in Psychiatry as a young psychiatrist of Bangladesh. Currently he is working as Associate Professor of Child Adolescent and Family Psychiatry in National Institute of Mental Health (NIMH), Dhaka, Bangladesh.
`, // Add more details here
    imgSrc: "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1740936031/drhelalcloud_fvdddg234-removebg-preview_1_dvcph6.png",
  },
 "dr-nasim-jahan": {
    name: "Dr. Nasim Jahan",
    title: "Senior Psychiatrist and Consultant",
    description: `Dr. Nasim Jahan is a Psychiatrist in Dhaka. Her qualification is MBBS, MCPS, FCPS (Psychiatry). Mental Diseases, Brain Disorder & Drug Addiction Specialist. She is a Assistant Professor, Psychiatry at Birdem General Hospital & Ibrahim Medical College.`,
    imgSrc:
      "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1740936189/Nasimjahancloud-removebg-preview_ppm0qa.png",
  },
  "razia-sultana-rima": {
    name: "Razia Sultana Rima",
    title: "Psycho-social Counselor and Therapist",
    description: (
      <ul className="list-disc list-inside text-left text-gray-700 space-y-2 mt-4">
        <li>
          Highly regarded psychologist in Bangladesh with over 15 years of
          experience in Research and Counseling.
        </li>
        <li>
          Accredited Psychologist from GTCO, India, and Certified NLP
          practitioner from GTCO & IAF Chennai, Tamil Nadu, India.
        </li>
        <li>Certified International Soft Skill Trainer from Emocare, India.</li>
        <li>
          Specialized Master's Degree in Clinical Social Work from the
          University of Dhaka, second position in class.
        </li>
        <li>
          MSC in Psychology from Jagannath University of Dhaka, First Class
          First.
        </li>
        <li>
          Diploma in Dynamic Counseling & Coaching Therapy from Emocare,
          Chennai, India.
        </li>
        <li>
          Conducted research on "Psychosocial Consequences and Mental Health
          Status Among Female Sex Workers in Dauladia, Bangladesh."
        </li>
        <li>
          Field practicum at the National Institute of Mental Health and
          Hospital, Dhaka.
        </li>
        <li>
          Currently working for Shantibari as a Consultant Psychologist,
          specializing in Adolescent and Adult Therapy.
        </li>
      </ul>
    ),
    imgSrc:
      "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1741159194/RaziasultanaRima2_uganzq.jpg",
  },

  "arpita-das": {
    name: "Arpita Das",
    title: "Psycho-social Counselor and Therapist",
    description: (
      <ul className="list-disc list-inside text-left text-gray-700 space-y-2 mt-4">
        <li>Dedicated psychosocial counselor and therapist at Shantibari.</li>
        <li>Specializes in both online and offline individual sessions.</li>
        <li>
          Applies Transactional Analysis (TA) theory as a counseling tool.
        </li>
        <li>
          400 practice hours in TA with a diploma from Bangalore, South India.
        </li>
        <li>
          Expertise in communication issues, relationship challenges, and
          marital conflicts.
        </li>
        <li>Holds a Master's degree in Psychology from Dhaka University.</li>
        <li>
          Uses play therapy and reinforcement theory for child psychology.
        </li>
      </ul>
    ),
    imgSrc:
      "https://res.cloudinary.com/db5yniogx/image/upload/v1735317781/Arpitadascloud_gdnt8q.png",
  },
  "tanzina-chowdhury": {
    name: "Tanzina Chowdhury",
    title: "Educational and Counselling Psychologist",
    description: (
      <ul className="list-disc list-inside text-left text-gray-700 space-y-2 mt-4">
        <li>
          {" "}
          Seasoned psychologist with over 15 years of experience since starting
          her professional journey in 2009.
        </li>
        <li>
          Holds an MPhil in Counselling Program (integrated 5 years program;
          Malaysia), MPhil in Educational Psychology from the University of
          Dhaka, and an MBA with a major in Human Resource Management from the
          United International University.
        </li>
        <li>
          Specializes in workplace and educational counseling, emphasizing
          client-centered assistance and empowerment.
        </li>
        <li>
          Adheres to high standards of professional conduct and ethical
          principles.
        </li>
        <li>
          Proficient in various counseling approaches, including SFBT, CBT,
          CTRT, Gestalt Therapy, Mindfulness Therapy, and Person-Centered
          Counseling.
        </li>
        <li>
          Focuses on Career Counseling and expanding expertise in bereavement
          and grief counseling.
        </li>
        <li>
          Versatile in working with clients from diverse backgrounds and age
          groups, including insight into parent-child relationship issues.
        </li>
        <li>
          Addresses a wide range of concerns, such as academic, personal,
          relationship issues, and career counseling.
        </li>
        <li>
          A beacon of competence and empathy, contributing significantly to the
          well-being of those she serves.
        </li>
      </ul>
    ),
    imgSrc:
      "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1740935709/tanzina234_dz2ggx.jpg",
  },

  "m-s-mahmuda": {
    name: "M S Mahmuda",
    title: "Mental Health Specialist",
    description: (
      <ul className="list-disc list-inside text-left text-gray-700 space-y-2 mt-4">
        <li> MHPSS, Expert (International)</li>
        <li>Msc, Educational and Counseling Psychology, (Dhaka University)</li>
        <li>MPH, NBU</li>
        <li>Certified in MHCE (Fordham University, USA)</li>
        <li>EMDR (Dhaka University, Trauma HAP, Switzerland)</li>
        <li>Interpersonal Psychotherapy (IPT) Columbia University, USA</li>
        <li>CBT, The Xcelomind-UYP, India</li>
      </ul>
    ),
    imgSrc:
      "https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1740935356/msmahmuda21_zjtg1o.jpg",
  },

};

export default function ProfilePage() {
  const { slug } = useParams();
  const profile = data[slug];

  if (!profile) {
    return <div className="p-10 text-center text-red-600">Profile not found.</div>;
  }

  return (
     <div className="bg-gray-200 text-gray-800 min-h-screen flex items-center justify-center">
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800 bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 relative mb-6">
          <Image
            src={profile.imgSrc}
            alt={profile.name}
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
        <p className="text-lg text-gray-600 mb-6">{profile.title}</p>
        {typeof profile.description === "string" ? (
          <p className="text-justify text-gray-700">{profile.description}</p>
        ) : (
          profile.description
        )}
      </div>
    </div>
    </div>
  );
}
