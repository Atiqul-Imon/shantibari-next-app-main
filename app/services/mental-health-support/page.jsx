import React from "react";
import Head from "next/head";

export async function generateMetadata() {
  const title = "Mental Health Support - Shantibari";
  const description =
    "Explore our mental health support services with expert psychiatrists, counselors, and therapists dedicated to your well-being. Learn more and reach out for assistance.";
  const url = "https://shantibaribd.org/services/mental-health-support";
  const imageUrl =
    "https://res.cloudinary.com/db5yniogx/image/upload/v1736272011/mentalhealthSupportHeroImagecloud_ywnd3h_i08dbd.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Shantibari",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Mental Health Support Team",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      // creator: "@TwitterHandle",
    },
    robots: "index, follow",
    alternates: {
      canonical: url,
    },
  };
}

const MentalHealthSupport = () => {
  // WhatsApp contact details
  const whatsappNumber = "8801325167271";
  const whatsappMessage = "Hello Shantibari Mental Health Support! I need assistance with...";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const teamMembers = [
    {
      name: `Dr. Helal Uddin Ahmed`,
      role: `Senior Psychiatrist and Consultant`,
      image:
        "https://res.cloudinary.com/db5yniogx/image/upload/v1735317397/drhelalcloud_fvdddg.jpg",
    },
    {
      name: `Dr. Nasim Jahan`,
      role: `Senior Psychiatrist and Consultant`,
      image:
        "https://res.cloudinary.com/db5yniogx/image/upload/v1735317673/Nasimjahancloud_jl62lq.png",
    },
    {
      name: `Razia Sultana Rima`,
      role: `Psycho-social Counselor and Therapist`,
      image:
        "https://res.cloudinary.com/db5yniogx/image/upload/v1735317558/Raziasultanarimacloud_vqmaug.png",
    },
    {
      name: `M S Mahmuda`,
      role: `Mental Health Specialist`,
      image:
        "https://res.cloudinary.com/db5yniogx/image/upload/v1737373449/m_s_mahmudacloud_tnrngg.jpg",
    },
    {
      name: `Tanzina Chowdhury`,
      role: `Educational and Counselling Psychologist`,
      image:
        "https://res.cloudinary.com/db5yniogx/image/upload/v1736852227/tanzinachoudhury01cloud_d92vrq.jpg",
    },
    {
      name: `Arpita Das`,
      role: `Psycho-social Counselor and Therapist`,
      image:
        "https://res.cloudinary.com/db5yniogx/image/upload/v1735317781/Arpitadascloud_gdnt8q.png",
    },
  ];

  // JSON-LD structured data
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mental Health Support",
    "provider": {
      "@type": "Organization",
      "name": "Shantibari",
      "url": "https://shantibaribd.org"
    },
    "name": "Mental Health Support",
    "description": "Expert psychiatric, counseling, and therapy services for women's well-being.",
    "areaServed": {
      "@type": "Country",
      "name": "Bangladesh"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mental Health Services",
      "itemListElement": teamMembers.map(member => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `${member.role} - ${member.name}`
        }
      }))
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
        "name": "Services",
        "item": "https://shantibaribd.org/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Mental Health Support",
        "item": "https://shantibaribd.org/services/mental-health-support"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section
          aria-label="Hero section with Mental Health Support title"
          className="relative w-full h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/db5yniogx/image/upload/v1736272011/mentalhealthSupportHeroImagecloud_ywnd3h_i08dbd.jpg')`,
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="border-2 border-white p-1 backdrop-blur-md">
              <h1 className="text-white text-4xl font-bold p-4">
                Mental Health Support
              </h1>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section
          aria-labelledby="about-mental-health-support"
          className="max-w-[1440px] mx-auto px-4 py-12 bg-gray-50 rounded-lg shadow-lg mt-12"
        >
          <h2
            id="about-mental-health-support"
            className="text-3xl font-bold mb-6 text-center text-gray-800"
          >
            About Mental Health Support
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Mental health support plays a crucial role in promoting overall well-being
            and addressing the challenges that individuals face in relation to their
            mental and emotional health. It encompasses a wide range of interventions,
            services, and resources designed to assist people in maintaining good mental
            health, seeking help when needed, and navigating through various mental health
            conditions.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            One of the fundamental aspects of mental health support is awareness and
            education. Promoting mental health literacy and reducing the stigma associated
            with mental health issues are essential in fostering an environment where
            individuals feel comfortable seeking help. Educating the general public,
            schools, workplaces, and communities about mental health helps to create a more
            empathetic and understanding society.
          </p>

          {/* WhatsApp Contact Button */}
          <div className="mt-10 text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl mx-auto"
              aria-label="Contact us via WhatsApp for mental health support"
            >
              <i className="fab fa-whatsapp text-2xl mr-2"></i>
              <span>Get an Appointment</span>
            </a>
            
          </div>
        </section>

        {/* Team Section */}
        <section
          aria-labelledby="mental-health-team"
          className="bg-gray-100 py-12"
        >
          <div className="max-w-[1440px] mx-auto px-4">
            <h2
              id="mental-health-team"
              className="text-3xl font-bold mb-8 text-center text-gray-800"
            >
              Our Team for Mental Health
            </h2>

            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers.map((member, index) => (
                <article
                  key={index}
                  className="w-[320px] bg-white p-8 rounded-lg shadow-lg text-center"
                >
                  <figure>
                    <img
                      src={member.image}
                      alt={`Portrait of ${member.name} - ${member.role}`}
                      className="w-32 h-32 rounded-full mx-auto mb-4"
                      loading="lazy"
                      width={128}
                      height={128}
                    />
                    <figcaption>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{member.role}</p>
                    </figcaption>
                  </figure>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp Contact Section */}
        <section className="max-w-[1440px] mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 shadow-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Get an Appointment
              </h2>
              <p className="text-green-100 text-xl mb-8">
                Our mental health professionals are ready to listen and support you
              </p>
              
              <div className="flex justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-green-700 font-bold py-4 px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
                >
                  <i className="fab fa-whatsapp text-3xl mr-3"></i>
                  <span>Message Us on WhatsApp</span>
                </a>
              </div>
              
              <div className="mt-10 p-6 bg-white bg-opacity-20 rounded-xl border border-white border-opacity-30 max-w-2xl mx-auto">
                <h3 className="font-bold text-gray-900 text-xl mb-4">How to get support:</h3>
                <ol className="list-decimal list-inside text-left text-gray-800 space-y-2 text-lg">
                  <li>Click the WhatsApp button above</li>
                 
                 <li>Share your concerns in a private conversation</li>
                  <li>Our professionals will guide you through next steps</li>
                </ol>
              </div>
              
             
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MentalHealthSupport;