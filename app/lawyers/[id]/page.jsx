// app/lawyers/[id]/page.jsx

import React from "react";
import lawyerData from "@/lib/data/lawyers";
import Image from "next/image";
import Link from "next/link";

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
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 min-h-screen">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link 
            href="/#lawyers" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Lawyers</span>
          </Link>

          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header Section with Image */}
            <div className="bg-gradient-to-r from-purple-600 to-violet-600 px-8 py-12 text-center relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px'
                }}></div>
              </div>
              
              {/* Profile Image */}
              <div className="relative z-10">
                <div className="relative h-48 w-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-white rounded-full p-1 shadow-2xl transform rotate-6"></div>
                  <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src={lawyer.imgSrc}
                      alt={lawyer.name}
                      fill
                      className="object-cover"
                      sizes="192px"
                      priority
                    />
                  </div>
                </div>
                
                {/* Name and Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg font-playfair">
                  {lawyer.name}
                </h1>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30">
                  <p className="text-white text-lg font-semibold">{lawyer.title}</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="px-8 py-12">
              {/* Breadcrumb */}
              <nav className="mb-8 text-sm text-gray-500">
                <ol className="flex items-center space-x-2">
                  <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
                  <li>/</li>
                  <li><Link href="/#lawyers" className="hover:text-gray-900 transition-colors">Our Lawyers</Link></li>
                  <li>/</li>
                  <li className="text-gray-900 font-medium">{lawyer.name}</li>
                </ol>
              </nav>

              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-8 border-l-4 border-purple-600">
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {lawyer.description}
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 text-center">
                <Link
                  href="/#lawyers"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-violet-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>View All Lawyers</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
