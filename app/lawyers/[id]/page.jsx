// app/lawyers/[id]/page.jsx

import React from "react";
import lawyerData from "@/lib/data/lawyers";
import Image from "next/image";

export async function generateStaticParams() {
    return Object.keys(lawyerData).map((id) => ({
      id,
    }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const lawyer = lawyerData[id];
    if (!lawyer) {
        return {
            title: "Lawyer not found",
        };
    }
    return {
        title: `${lawyer.name} - ${lawyer.title}`,
        description: lawyer.description.substring(0, 160),
        openGraph: {
            title: lawyer.name,
            description: lawyer.description.substring(0, 160),
            images: [lawyer.imgSrc],
        },
    };
}

export default async function LawyerDetails({ params }) {
  const { id } = await params;
  const lawyer = lawyerData[id];

  if (!lawyer) {
    return (
      <div className="text-center text-red-500 py-12">Lawyer not found!</div>
    );
  }

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": lawyer.name,
    "jobTitle": lawyer.title,
    "image": lawyer.imgSrc,
    "description": lawyer.description,
    "worksFor": {
      "@type": "Organization",
      "name": "Shantibari"
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://shantibaribd.org"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Our Lawyers",
        "item": "https://shantibaribd.org/#lawyers"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": lawyer.name
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, breadcrumbJsonLd]) }}
      />
      <div className="flex flex-col items-center py-12 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full p-6">
          <div className="flex flex-col items-center">
            <div className="relative h-60 w-60">
              <Image
                src={lawyer.imgSrc}
                alt={`${lawyer.name}, ${lawyer.title}`}
                fill
                className="object-cover rounded-full border-2 shadow-lg"
                sizes="240px"
              />
            </div>
            <h1 className="text-4xl font-bold mt-6 font-playfair text-gray-800">
              {lawyer.name}
            </h1>
            <p className="text-lg text-gray-600 mt-4 text-left leading-relaxed whitespace-pre-line">
              {lawyer.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
