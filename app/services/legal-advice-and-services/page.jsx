import React from "react";
import Image from "next/image";
import Link from "next/link";
import lawyerData from "@/lib/data/lawyers";

export const metadata = {
  title: "Legal Advice and Services - Shantibari",
  description: "Get expert legal advice from Supreme Court advocates in Bangladesh. Family law, criminal defense, contracts, and inheritance planning services.",
  keywords: "legal advice Bangladesh, Supreme Court lawyer, family law Bangladesh, criminal defense attorney, legal consultation Dhaka, contract drafting, inheritance planning",
  
  alternates: {
    canonical: "https://shantibaribd.org/services/legal-advice-and-services",
  },
  
  openGraph: {
    title: "Legal Advice and Services - Shantibari",
    description: "Connect with top lawyers in Bangladesh for trusted legal solutions",
    images: [
      {
        url: "https://res.cloudinary.com/db5yniogx/image/upload/v1736942344/legalservicescloud_tm2nqv.jpg",
        width: 1200,
        height: 630,
        alt: "Legal Advice Services at Shantibari",
      },
    ],
    url: "https://shantibaribd.org/services/legal-advice-and-services",
    type: "website",
    locale: "en_BD",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Legal Advice and Services - Shantibari",
    description: "Expert legal counsel from top lawyers in Bangladesh",
    images: ["https://res.cloudinary.com/db5yniogx/image/upload/v1736942344/legalservicescloud_tm2nqv.jpg"],
    site: "@shantibari_bd",
  },
};

function LegalAdviceDetails() {
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
        "name": "Services",
        "item": "https://shantibaribd.org/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Legal Advice and Services",
        "item": "https://shantibaribd.org/services/legal-advice-and-services"
      }
    ]
  };

  const legalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Legal Advice and Services at Shantibari",
    "description": "Professional legal services by top lawyers in Bangladesh, specializing in family law, criminal defense, and more.",
    "url": "https://shantibaribd.org/services/legal-advice-and-services",
    "telephone": "+8801325167271",
    "provider": {
      "@type": "Organization",
      "name": "Shantibari",
      "url": "https://shantibaribd.org"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Bangladesh"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Family Law Consultation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Criminal Defense" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Contract Drafting" } }
      ]
    },
    "image": "https://res.cloudinary.com/db5yniogx/image/upload/v1736942344/legalservicescloud_tm2nqv.jpg",
    "sameAs": [
      "https://facebook.com/shantibari24",
      "https://www.linkedin.com/in/shantibari-ltd/"
    ]
  };

  // Map lawyer name to lawyerData ID
  const getIdByName = (name) => {
    for (const id in lawyerData) {
      if (lawyerData[id].name === name) {
        return id;
      }
    }
    return null;
  };

  // List of lawyers for the cards (should match lawyerData)
  const lawyers = [
    {
      name: "Adv. Nahid Shams",
      title: "Director, Legal Services",
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735494831/nahidshamsshantibaricloud_wqbzwp.jpg",
    },
    {
      name: "Mahjabin Rabbani",
      title: "Advocate, Supreme Court of Bangladesh",
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1740936984/mahjabinrabbani123-removebg-preview_1_kztsra.png",
    },
    {
      name: "Adv. Fahriya Ferdous",
      title: "Advocate, Supreme Court of Bangladesh",
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1740936657/Adv-Fahriya-Ferdousecloud234-removebg-preview_1_jkohth.png",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd, legalServiceJsonLd]) }}
      />

      <main className="w-full bg-gray-50">
        {/* Hero Section */}
        <section className="relative w-full h-[400px]">
          <Image
            src="https://res.cloudinary.com/db5yniogx/image/upload/v1736942344/legalservicescloud_tm2nqv.jpg"
            alt="Legal services hero background"
            fill
            priority
            className="z-0 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="border-2 border-white p-4 backdrop-blur-md">
              <h1 className="text-white text-4xl md:text-5xl font-bold font-playfair text-center">
                Legal Advice and Services
              </h1>
            </div>
          </div>
        </section>


        {/* Description Section */}
        <section className="max-w-[1440px] mx-auto px-4 py-12">
          <article>
            <p className="text-gray-800 font-roboto mb-6 leading-7 text-lg">
              Legal advice and services are essential for ensuring justice,
              protecting rights, and navigating the legal system. Legal
              professionals such as attorneys and advocates offer representation
              and guidance in various fields including family law, business law,
              and criminal justice.
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <Image
                src="https://res.cloudinary.com/db5yniogx/image/upload/v1736942344/legalservicescloud_tm2nqv.jpg"
                alt="Lawyer giving legal support"
                width={500}
                height={300}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
              <Image
                src="https://res.cloudinary.com/db5yniogx/image/upload/v1736942110/legalserviceimagecloud_wzeumb.jpg"
                alt="Legal consultation session"
                width={500}
                height={300}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
            </div>

            <p className="text-gray-800 font-roboto leading-7 text-lg">
              Whether it's drafting contracts, defending in court, or helping
              with inheritance planning, legal counsel ensures you make informed
              decisions and avoid costly mistakes. Our lawyers offer tailored
              support and understand the nuances of Bangladeshi law.
            </p>
          </article>
        </section>

        {/* Our Lawyers Section */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-[1440px] mx-auto px-4">
            <header className="mb-8 text-center">
              <h2 className="text-3xl font-bold font-playfair text-gray-800">
                Meet Our Lawyers
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Experienced advocates ready to serve your legal needs.
              </p>
            </header>

            <div className="flex flex-wrap justify-center gap-6">
              {lawyers.map((lawyer) => {
                const id = getIdByName(lawyer.name);
                const card = (
                  <article
                    className="w-[300px] p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <Image
                      src={lawyer.image}
                      alt={`${lawyer.name} portrait`}
                      width={160}
                      height={160}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-1" itemProp="name">
                      {lawyer.name}
                    </h3>
                    <p className="text-gray-600 font-roboto" itemProp="jobTitle">
                      {lawyer.title}
                    </p>
                  </article>
                );
                return id ? (
                  <Link key={lawyer.name} href={`/lawyers/${id}`} prefetch={false}>
                    {card}
                  </Link>
                ) : (
                  <div key={lawyer.name}>{card}</div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LegalAdviceDetails;