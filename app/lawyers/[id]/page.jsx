// app/lawyers/[id]/page.jsx

import React from "react";

const lawyerData = {
  1: {
    name: "Adv. Nahid Shams",
    description:
      `Nahid Shams is a lawyer and human rights activist. She completed her LLB and LLM from Rajshahi University. She started working on legal rights for all classes of women in the country. For fifteen years, she worked at the human rights organization – Ain O Salish Kendra, later she joined the Manobadhikar Songskriti Foundation. She has extensive experience in working on women’s family problems and human rights violations. She has also traveled to various regions of the country outside Dhaka to assist and advocate for helpless and oppressed women. Nahid Shams is a co-founder of Shantibari.`,
    imgSrc:
      "https://res.cloudinary.com/db5yniogx/image/upload/v1735494831/nahidshamsshantibaricloud_wqbzwp.jpg",
  },
  2: {
    name: "Mahjabin Rabbani",
    description: `Mahjabin Rabbani is an experienced lawyer who has been practicing at the Bangladesh Supreme Court for over two decades. As part of her legal career, she has served as a lawyer for a renowned national human rights organization, where she played a key role in handling Public Interest Litigations (PILs) on behalf of the organization. She has extensive experience in combating violence against women and domestic abuse, as well as working as a mediator to resolve family disputes and conflicts. From 2019 to 2024, she served as an Assistant Attorney General at the Attorney General's Office, representing the state in various significant cases with dedication and integrity. Additionally, she was a member of the Executive Committee of Bangladesh Legal Aid for four years, where she actively worked to provide free legal assistance to underprivileged and justice-seeking individuals. Currently, she is associated with Z. I. Khan & Associates, where she specializes in civil, criminal, writ, financial debt, and corporate matters as a practicing lawyer.`,
    imgSrc:
      "https://res.cloudinary.com/db5yniogx/image/upload/v1740936984/mahjabinrabbani123-removebg-preview_1_kztsra.png",
  },
  3: {
    name: "Adv. Fahriya Ferdous",
    description: `Fahriya Ferdous is a distinguished Advocate at the Supreme Court of Bangladesh. Following the completion of her academic studies in 2009, she commenced her legal career at one of the most esteemed law firms in the country, Ruhul Quddus & Jurist. Under the mentorship of Mr. Md. Ruhul Quddus, Barrister-at-Law and Senior Advocate of the Supreme Court of Bangladesh, Ms. Ferdous honed her expertise and officially enrolled as an Advocate in 2010. Throughout her career, Ms. Ferdous has demonstrated unwavering dedication to the legal profession, contributing to numerous nationally significant cases that have garnered media coverage across the country. Her areas of practice encompass a broad spectrum of legal fields, including criminal law, VAT and customs, company law, family law, and constitutional matters. She also possesses extensive experience in legal documentation, drafting, and litigation. In addition to her legal practice, Ms. Ferdous has collaborated with non-governmental organizations (NGOs), international non-governmental organizations (INGOs), and both national and international organizations, further enriching her professional portfolio and showcasing her versatile legal expertise.`,
    imgSrc:
      "https://res.cloudinary.com/db5yniogx/image/upload/v1740936657/Adv-Fahriya-Ferdousecloud234-removebg-preview_1_jkohth.png",
  },
};

export default function LawyerDetails({ params }) {
  const lawyer = lawyerData[params.id];

  if (!lawyer) {
    return (
      <div className="text-center text-red-500 py-12">Lawyer not found!</div>
    );
  }

  return (
    <div className="flex flex-col items-center py-12 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full p-6">
        <div className="flex flex-col items-center">
          <img
            className="h-60 w-60 object-cover rounded-full border-2 shadow-lg"
            src={lawyer.imgSrc}
            alt={lawyer.name}
          />
          <h1 className="text-4xl font-bold mt-6 font-playfair text-gray-800">
            {lawyer.name}
          </h1>
          <p className="text-lg text-gray-600 mt-4 text-left
           leading-relaxed whitespace-pre-line">
            {lawyer.description}
          </p>
        </div>
      </div>
    </div>
  );
}
