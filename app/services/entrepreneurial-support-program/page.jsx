import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Entrepreneurial Support Program - Shantibari",
  description: "Shantibari's Entrepreneurial Support Program provides dedicated display corners for women entrepreneurs, organizes fairs, and showcases products through our Madam Walker Display Corner.",
  keywords: "entrepreneurial support, women entrepreneurs, business incubation, startup support Bangladesh, women empowerment, business fairs, Madam Walker Display Corner",
  
  alternates: {
    canonical: "https://shantibaribd.org/services/entrepreneurial-support-program",
  },
  
  openGraph: {
    title: "Entrepreneurial Support Program - Shantibari",
    description: "Empowering women entrepreneurs through dedicated display corners and business fairs",
    images: [
      {
        url: "https://res.cloudinary.com/db5yniogx/image/upload/v1735340419/aboutuscloudinary_si2umb.jpg",
        width: 1200,
        height: 630,
        alt: "Shantibari Entrepreneurial Support Program",
      },
    ],
    url: "https://shantibaribd.org/services/entrepreneurial-support-program",
    type: "website",
    locale: "en_BD",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Entrepreneurial Support Program - Shantibari",
    description: "Supporting women entrepreneurs in Bangladesh through business incubation and fairs",
    images: ["https://res.cloudinary.com/db5yniogx/image/upload/v1735340419/aboutuscloudinary_si2umb.jpg"],
    site: "@shantibari_bd",
  },
};

export default function EntrepreneurialSupportProgram() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Shantibari Entrepreneurial Support Program",
    "description": "Program supporting women entrepreneurs in Bangladesh through business incubation, product display, and networking events",
    "url": "https://shantibaribd.org/services/entrepreneurial-support-program",
    "telephone": "+880 1325-167271",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Bangladesh"
    },
    "image": "https://res.cloudinary.com/db5yniogx/image/upload/v1735340419/aboutuscloudinary_si2umb.jpg",
    "sameAs": [
      "https://www.facebook.com/Shantibari24/",
      "https://www.linkedin.com/in/shantibari-ltd/"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="font-sans bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[28rem] flex items-center justify-center text-white shadow-lg">
          <Image
            src="https://res.cloudinary.com/db5yniogx/image/upload/v1735340419/aboutuscloudinary_si2umb.jpg"
            alt="Entrepreneurial Support Program at Shantibari"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="bg-opacity-60 px-8 py-4 border-2 border-white p-4 backdrop-blur-md">
              <h1 className="text-4xl md:text-5xl font-extrabold text-center">
                Entrepreneurial Support Program
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto py-20 px-6 space-y-24">
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-blue-600 pl-4 mb-6">
              Entrepreneurial Support Program
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Shantibari, a visionary organization committed to fostering entrepreneurship, has established a highly definitive and inclusive Entrepreneurial Support Program that sets it apart. One remarkable aspect of this program is the provision of dedicated display corners exclusively for women entrepreneurs who operate their businesses online. These display corners serve as a powerful platform for showcasing their products and services, amplifying their reach, and connecting with potential customers.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Furthermore, Shantibari goes the extra mile in promoting these women-led ventures by organizing regular fairs and exhibitions, drawing attention to their innovations and talents. These events not only create networking opportunities but also drive awareness and recognition for the remarkable contributions of women entrepreneurs. With this unwavering focus on empowering women and encouraging their entrepreneurial spirit, Shantibari is making a tangible and lasting impact on the entrepreneurial landscape, propelling gender equality and economic growth hand in hand.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/db5yniogx/image/upload/v1735715489/shantibaricloud_ia56z2.jpg"
                alt="Women entrepreneurs showcasing products at Shantibari"
                width={1200}
                height={800}
                className="w-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-blue-600 pl-4 mb-6">
              Madam Walker Display Corner
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to our vibrant Madam Walker Display Corner, a celebration of women entrepreneur's ingenuity and creativity. Nested within our boutique store, this exquisite showcase highlights a diverse array of products meticulously crafted by talented women from all walks of life. As you step into this empowering space, you'll be captivated by the artistry and passion that infuse each item on display.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              From handcrafted jewelry that narrates personal stories to elegant fashion pieces that redefine elegance, this corner is a testament to the entrepreneurial spirit and resilience of women. Supporting these enterprising individuals means more than just acquiring unique treasures; it symbolizes our commitment to fostering a more inclusive and equitable world where women's voices and talents are celebrated and uplifted.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/db5yniogx/image/upload/v1735715813/madamwalkerdisplaycornercloud_swxbol.jpg"
                alt="Madam Walker Display Corner at Shantibari"
                width={1200}
                height={800}
                className="w-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-blue-600 pl-4 mb-6">
              Women Entrepreneur Fair
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Women Entrepreneur Fair, organized by Shantibari, was an inspiring and empowering event that showcased the immense talent and creativity of women entrepreneurs. Held in a vibrant and welcoming atmosphere, the fair provided a platform for women entrepreneurs to exhibit their innovative products and services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              From innovative tech startups to handcrafted artisanal goods, the event was a testament to the determination and resilience of women in business. Besides offering a unique shopping experience, the fair also featured insightful panel discussions, workshops, and networking opportunities, enabling participants to learn from successful business leaders and forge valuable connections.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Women Entrepreneur Fair by Shantibari left a lasting impact, not only by promoting women-led business but also by fostering a supportive community that encourages and uplifts women entrepreneurs in their pursuit of success.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/db5yniogx/image/upload/v1735716006/%E0%A6%89%E0%A6%A6%E0%A7%8D%E0%A6%A6%E0%A7%81%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%AE%E0%A7%87%E0%A6%B2%E0%A6%BE_h3apwl.jpg"
                alt="Women Entrepreneur Fair organized by Shantibari"
                width={1200}
                height={800}
                className="w-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}