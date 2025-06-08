'use client';

import React from 'react';
import Head from 'next/head';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | Shantibari - Empowering Women in Bangladesh</title>
        <meta name="description" content="Empowering women in Bangladesh through comprehensive support programs." />
        <link rel="canonical" href="https://shantibaribd.org/about-us" />

        {/* Open Graph Meta */}
        <meta property="og:title" content="About Shantibari | Empowering Women in Bangladesh" />
        <meta property="og:description" content="Learn about Shantibari's mission to empower women through mental health support, legal aid, and business support programs." />
        <meta property="og:image" content="https://res.cloudinary.com/db5yniogx/image/upload/v1737380953/sbarioglogo_snkepr.png" />
        <meta property="og:url" content="https://shantibaribd.org/about-us" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Shantibari" />
        <meta name="twitter:description" content="Discover how Shantibari supports women in Bangladesh with mental health and business empowerment programs." />
        <meta name="twitter:image" content="https://res.cloudinary.com/db5yniogx/image/upload/v1737380953/sbarioglogo_snkepr.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shantibari",
              "url": "https://shantibaribd.org",
              "logo": "https://res.cloudinary.com/db5yniogx/image/upload/v1737380953/sbarioglogo_snkepr.png",
              "sameAs": [
                "https://www.facebook.com/shantibari24",
                "https://www.instagram.com/shantibari24"
              ],
              "description": "Shantibari is a women's empowerment organization in Bangladesh offering mental health support, legal aid, and entrepreneurship programs.",
              "foundingDate": "2022-07",
              "founder": {
                "@type": "Organization",
                "name": "Feminist Factor"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dhaka",
                "addressCountry": "Bangladesh"
              }
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-[450px] bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/db5yniogx/image/upload/v1735340419/aboutuscloudinary_si2umb.jpg')`,
        }}
      >
        <div className="absolute inset-0" />
        <div className="relative z-10 text-white border-2 border-white p-1 backdrop-blur-md px-4 py-4">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide drop-shadow-lg">
            About Us
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Empowering women through mental health support, legal aid, and entrepreneurship.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="https://res.cloudinary.com/db5yniogx/image/upload/t_Media%20Coverage/v1736871887/shantibarilogocloud_j5gt3p.jpg"
              alt="Shantibari Logo"
              className="w-40 h-40 object-contain rounded-full border-4 border-primary shadow-lg"
            />
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-gray-800 leading-relaxed">
              Shantibari is a women’s organization, based in Dhaka, Bangladesh, which aims to empower women through its multifaceted activities. Founded in July 2022 as a sister concern of Feminist Factor (2020), Shantibari has been committed to helping women in diverse ways, i.e., mental health and legal support, reinforcing information services, and supporting women-led entrepreneurship, etc.
            </p>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Company Culture</h2>
              <p className="text-gray-800">
                At Shantibari, we value innovation, teamwork, and client satisfaction. We foster a safe, healthy, and collaborative work environment where employees are encouraged to share ideas and support each other in attaining our goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg">
              To empower women through education, advocacy, and support to achieve their full potential and lead fulfilling lives.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 text-lg">
              To create a world where women have equal opportunities and rights to succeed and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Impact</h3>
            <ul className="text-gray-700 text-lg space-y-4 list-disc pl-5">
              <li>Supported 10,000+ women with mental health and legal services over the year</li>
              <li>Over 150,000 followers and adherents across the country through online platforms</li>
              <li>Supported a good number of women entrepreneurs and small-business owners</li>
              <li>Hosted numerous events, including sessions, conferences, workshops, exhibitions, webinars, etc.</li>
              <li>Collaborations with multiple companies to enhance our social offerings</li>
              <li>Strong financial performance and steady revenue growth</li>
              <li>Featured in national media: Prothom Alo, The Business Standard, Channel 24, etc.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/db5yniogx/image/upload/v1735340583/aboutusimagecloud_mftqip.jpg"
              alt="Shantibari Impact"
              className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300 w-full md:w-4/5"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
