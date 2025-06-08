import React from "react";
import Head from "next/head";

export async function generateMetadata() {
  const title = "Mental Health Support - Expert Psychiatrists & Counselors";
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shantibari",
    url: "https://shantibaribd.org/",
    logo:
      "https://res.cloudinary.com/db5yniogx/image/upload/v1736272011/mentalhealthSupportHeroImagecloud_ywnd3h_i08dbd.jpg",
    sameAs: [
      "https://www.facebook.com/shantibari24",
      "https://www.instagram.com/shantibari24"
    ],
    department: {
      "@type": "Organization",
      name: "Shantibari Mental Health Support Service",
      member: teamMembers.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        image: member.image,
      })),
    },
  };

  return (
    <>
      <Head>
        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Canonical link */}
        <link
          rel="canonical"
          href="https://shantibaribd.org/services/mental-health-support"
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

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

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8 rounded-md shadow-md">
            <p className="text-blue-700 font-semibold">
              If you're looking for more information or need assistance,{" "}
              <a
                href="/contact"
                className="underline hover:text-blue-900"
                aria-label="Contact us for mental health support"
              >
                feel free to reach out to us
              </a>
              .
            </p>
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
      </div>
    </>
  );
};

export default MentalHealthSupport;
