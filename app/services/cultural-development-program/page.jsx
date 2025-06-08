import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Cultural Development Program - Shantibari",
  description: "Shantibari's Cultural Development Program empowers women through cultural events, art exhibitions, and film screenings. Discover our gallery and support women artists.",
  keywords: "cultural development, women empowerment Bangladesh, art gallery Dhaka, women artists, photography exhibitions, film screenings, cultural events Bangladesh",
  
  alternates: {
    canonical: "https://shantibaribd.org/services/cultural-development-program",
  },
  
  openGraph: {
    title: "Cultural Development Program - Shantibari",
    description: "Empowering women through arts, culture, and creative expression in Bangladesh",
    images: [
      {
        url: "https://res.cloudinary.com/db5yniogx/image/upload/v1735719769/shantibariculture02_bfivjo_cb1341.jpg",
        width: 1200,
        height: 630,
        alt: "Cultural Development Program at Shantibari",
      },
    ],
    url: "https://shantibaribd.org/services/cultural-development-program",
    type: "website",
    locale: "en_BD",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Cultural Development Program - Shantibari",
    description: "Supporting women artists through exhibitions, cultural events, and film screenings",
    images: ["https://res.cloudinary.com/db5yniogx/image/upload/v1735719769/shantibariculture02_bfivjo_cb1341.jpg"],
    site: "@shantibari_bd",
  },
};

function CulturalDevelopment() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ArtGallery",
    "name": "Shantibari Cultural Development Program",
    "description": "Program supporting women artists through cultural events, exhibitions, and film screenings",
    "url": "https://shantibaribd.org/services/cultural-development-program",
    "telephone": "+880 1325-167271",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Bangladesh"
    },
    "image": "https://res.cloudinary.com/db5yniogx/image/upload/v1735719769/shantibariculture02_bfivjo_cb1341.jpg",
    "sameAs": [
      "https://facebook.com/shantibari24",
      "https://www.linkedin.com/in/shantibari-ltd/"
    ],
    "openingHours": "By appointment",
    "hasMap": "https://www.google.com/maps/place/3%2F1,+Block+%23+F,+Lalmatia,+Dhaka,+Bangladesh"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full bg-gray-100">
        {/* Hero Section */}
        <div className="relative w-full h-96">
          <Image
            src="https://res.cloudinary.com/db5yniogx/image/upload/v1735719769/shantibariculture02_bfivjo_cb1341.jpg"
            alt="Cultural Development Program at Shantibari"
            fill
            priority
            className="object-cover"
          />
          
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="bg-opacity-60 px-8 py-4 border-2 border-white p-4 backdrop-blur-md">
              <h1 className="text-4xl md:text-5xl font-extrabold text-center">
                Cultural Development Program
              </h1>
            </div>
          </div>
        </div>

        {/* Program Details Section */}
        <div className="max-w-[1440px] mx-auto px-4 py-12 text-center">
          {/* Two Cards Section */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* First Card - About Program */}
            <div className="flex-1 min-w-[350px] max-w-[500px] p-8 bg-white rounded-lg shadow-lg">
              <div className="mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/db5yniogx/image/upload/v1735719304/shantibariculture_zg2f9w.jpg"
                  alt="Cultural event showcasing women's talents"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                About the Program
              </h3>
              <p className="text-gray-600 text-left">
                The Cultural Development Program of Shantibari takes pride in its
                commitment to women's empowerment through various cultural
                initiatives. Regular cultural events specifically dedicated to
                women are organized, providing a platform for talented women to
                showcase their skills and artistic talents. These events not only
                celebrate women's creativity but also encourage their active
                participation in the cultural life of the community. Additionally,
                Shantibari's art gallery offers opportunities for women
                photographers and artists to exhibit their works, giving them the
                exposure they deserve. The program also boasts an open space where
                film shows are arranged, allowing women filmmakers to screen the
                films they create, fostering a supportive and encouraging
                environment for women in the film industry. By promoting gender
                equality and providing avenues for women to express themselves
                artistically, the Cultural Development Program of Shantibari
                contributes significantly to the cultural vibrancy and diversity
                of the region.
              </p>
            </div>

            {/* Second Card - Gallery */}
            <div className="flex-1 min-w-[350px] max-w-[500px] p-8 bg-white rounded-lg shadow-lg">
              <div className="mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/db5yniogx/image/upload/v1735719172/cultural_r4dudl.jpg"
                  alt="Shantibari Art Gallery exhibition space"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Shantibari's Gallery
              </h3>
              <p className="text-gray-600 text-left">
                Welcome to Shantibari's gallery, where art and photography
                enthusiasts are invited to immerse themselves in a captivating
                world of creativity and expression. Our exhibition facilities
                boast a seamless blend of modern aesthetics and cultural heritage,
                providing the perfect backdrop to showcase the diverse and
                inspiring works of both established and emerging artists. With
                ample space and carefully curated lighting, the gallery exudes an
                ambiance that allows each piece to shine vibrantly and engage the
                senses of every visitor. Whether you are an admirer of traditional
                art or a lover of contemporary photography, Shantibari's gallery
                promises to be a haven of artistic discovery, fostering a deeper
                appreciation for the power of visual storytelling. Step inside and
                experience the beauty and complexity of human imagination captured
                within each frame and canvas, where the fusion of art and
                photography transcends boundaries and sparks the boundless
                possibilities of creative expression.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Services Link */}
        <div className="text-center py-8">
          <Link 
            href="/services" 
            className="text-blue-600 hover:text-blue-500 font-medium text-lg"
            aria-label="Return to all services"
          >
            Back to Our Services
          </Link>
        </div>
      </div>
    </>
  );
}

export default CulturalDevelopment;