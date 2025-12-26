import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const advisors = [
  {
    id: 1,
    name: 'Dr. Nazmun N. Ratna',
    title: 'Associate Professor, Lincoln University',
    imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313976/Nazmunratnacloud_bzwbmn.png',
    description: `Dr. Nazmun N. Ratna is an Associate Professor in Economics of Development at the Department of Global Value Chain and Trade, Faculty of Agribusiness and Commerce, Lincoln University. Nazmun is a development economist by training and joined Lincoln University in 2007 after completing her Ph.D. degree from the Crawford School of Public Policy, The Australian National University. She has dedicated much of her recent time to researching the institutions-economic development-gender nexus in South Asia (Bangladesh, Nepal, and India), and supervised students' projects in Southeast Asia (Vietnam), North America (Costa Rica), and Africa (Nigeria, Ghana, and Malawi). Until recently, Nazmun worked as the Associate Dean, Research for the faculty, and represented the faculty at the University-wide Research Committee developing guidance for the strategic development, governance, and quality assurance matters related to the University's research environment.

Nazmun's research specializes in empirical development economics, focusing on the economics of social capital and diversity, conflict, food security-gender nexus, and sustainable economic development. Her applied econometrics papers have been published in high-ranked journals, among others, from disciplinary journals (Australian Journal of Resource and Agricultural Economics, European Review of Agricultural Economics, Agricultural and Resource Economics Review, and Food Policy) to applied economics/ policy journals (Economic Papers, Development in Practice, and Asia and the Pacific Policy Studies). She has worked in multidisciplinary research teams for externally funded projects and has been publishing in leading interdisciplinary journals like Agricultural Systems, World Development, Ecological Modelling, and Journal of Sustainable Tourism. Currently, she is leading a paper on Women Empowerment in Migration Index (WEMI), for a project funded by FCDO, on safe migration of domestic and readymade garments workers from Bangladesh and Nepal to the Middle East.

In her teaching, she wishes to provide students with learning experiences which encourage them to explore more, enable them to ask the 'right' questions, and guide them to think about the greater goal of their contribution to society. She has been teaching for more than 25 years, in four different universities in three countries. For a large part of this journey, she finds herself as a learner, traversing across the different educational systems, social norms, and students' approaches to learning. Her teaching philosophy hence has been an evolving one.`,
  },
  {
    id: 2,
    name: 'Anirban Bhowmik',
    title: 'Development Expert',
    imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735314046/Anirbanbhowmikcloud_qvfqjx.png',
    description: `For more than a decade, Anirban has been working on international development. He has worked on private sector development, inclusive economic participation of local people in various countries in Asia, Africa, and Eastern Europe. He has worked at the UK government's international development agency as a consultant, including in Bangladesh and other countries in South Asia. He has led as a national representative in the International Development Agency. Currently, he is working as a regional manager for East Africa in an international development agency. His commitment to establishing gender equality in technology and emphasizing the importance of social entrepreneurship is unparalleled – keeping this idea in mind, he has joined as an advisor with Shantibari.`,
  },
];

export async function generateStaticParams() {
  return advisors.map((advisor) => ({
    id: advisor.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const advisor = advisors.find((advisor) => advisor.id === parseInt(id));
  
  if (!advisor) {
    return {
      title: "Advisor not found",
    };
  }

  return {
    title: `${advisor.name} - ${advisor.title}`,
    description: advisor.description.substring(0, 160),
    openGraph: {
      title: advisor.name,
      description: advisor.description.substring(0, 160),
      images: [advisor.imgSrc],
    },
  };
}

export default async function AdvisorDetail({ params }) {
  const { id } = await params;
  const advisor = advisors.find((advisor) => advisor.id === parseInt(id));

  if (!advisor) {
    return <p className="text-center text-red-500">Advisor not found.</p>;
  }

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": advisor.name,
    "jobTitle": advisor.title,
    "image": advisor.imgSrc,
    "description": advisor.description,
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
        "name": "Our Advisors",
        "item": "https://shantibaribd.org/#advisors"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": advisor.name
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
      <div className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 min-h-screen">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link 
            href="/#advisors" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200 group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Advisors</span>
          </Link>

          {/* Main Content Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header Section with Image */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-12 text-center relative overflow-hidden">
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
                      src={advisor.imgSrc}
                      alt={advisor.name}
                      fill
                      className="object-cover"
                      sizes="192px"
                      priority
                    />
                  </div>
                </div>
                
                {/* Name and Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                  {advisor.name}
                </h1>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30">
                  <p className="text-white text-lg font-semibold">{advisor.title}</p>
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
                  <li><Link href="/#advisors" className="hover:text-gray-900 transition-colors">Our Advisors</Link></li>
                  <li>/</li>
                  <li className="text-gray-900 font-medium">{advisor.name}</li>
                </ol>
              </nav>

              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-xl p-8 border-l-4 border-emerald-600">
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                    {advisor.description}
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 text-center">
                <Link
                  href="/#advisors"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>View All Advisors</span>
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
