
import React from "react";
import Head from "next/head";
import Image from "next/image";

function LegalAdviceDetails() {
  return (
    <>
      <Head>
        <title>Expert Legal Advice & Services | Shantibari Legal Team</title>
        <meta
          name="description"
          content="Access expert legal advice and professional services from our advocates. Get guidance on family law, criminal defense, contracts, and more."
        />
        <meta
          name="keywords"
          content="legal advice, legal services, family law, criminal defense, legal consultation, lawyers in Bangladesh, Supreme Court advocates"
        />
        <link rel="canonical" href="https://shantibaribd.org/services/legal-advice-and-services" />
        <meta property="og:title" content="Expert Legal Advice & Services" />
        <meta
          property="og:description"
          content="Connect with top advocates in Bangladesh for trusted legal solutions tailored to your needs."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/db5yniogx/image/upload/v1736942344/legalservicescloud_tm2nqv.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="w-full bg-gray-50">
        {/* Hero Section */}
        <section className="relative w-full h-[400px]">
          <Image
            src="https://res.cloudinary.com/db5yniogx/image/upload/v1736942344/legalservicescloud_tm2nqv.jpg"
            alt="Legal services hero background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0  flex items-center justify-center z-10 border-2">
           
           <div className="border-2 border-white p-1 backdrop-blur-md">
                <h1 className="text-white text-4xl font-bold font-playfair text-center">
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
              {/* Lawyer Card 1 */}
              <article
                className="w-[300px] p-6 bg-white rounded-lg shadow-lg text-center"
                itemScope
                itemType="https://schema.org/Person"
              >
                <Image
                  src="https://res.cloudinary.com/db5yniogx/image/upload/v1735494831/nahidshamsshantibaricloud_wqbzwp.jpg"
                  alt="Advocate Nahid Shams portrait"
                  width={160}
                  height={160}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1" itemProp="name">
                  Adv. Nahid Shams
                </h3>
                <p className="text-gray-600 font-roboto" itemProp="jobTitle">
                  Director, Legal Services
                </p>
              </article>

              {/* Lawyer Card 2 */}
              <article
                className="w-[300px] p-6 bg-white rounded-lg shadow-lg text-center"
                itemScope
                itemType="https://schema.org/Person"
              >
                <Image
                  src="https://res.cloudinary.com/db5yniogx/image/upload/v1735314212/Adv-Fahriya-Ferdousecloud_sk71zm.jpg"
                  alt="Advocate Fahriya Ferdous portrait"
                  width={160}
                  height={160}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1" itemProp="name">
                  Adv. Fahriya Ferdous
                </h3>
                <p className="text-gray-600 font-roboto" itemProp="jobTitle">
                  Advocate, Supreme Court of Bangladesh
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LegalAdviceDetails;