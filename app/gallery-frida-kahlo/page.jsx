import React from 'react';

export const metadata = {
  title: "Frida Kahlo Art Gallery - Shantibari",
  description: "Explore the Frida Kahlo Art Gallery at Shantibari. Discover beautiful paintings from talented artists like Dilruba Papia, Lubna Habib, and more.",
  keywords: "Frida Kahlo gallery, Shantibari art gallery, women artists Bangladesh, contemporary art Dhaka, oil painting, acrylic on canvas",
  
  alternates: {
    canonical: "https://shantibaribd.org/gallery-frida-kahlo",
  },
  
  openGraph: {
    title: "Frida Kahlo Art Gallery - Shantibari",
    description: "Discover a curated collection of art by talented female artists at the Shantibari gallery.",
    images: [
      {
        url: "https://res.cloudinary.com/db5yniogx/image/upload/v1735389656/frida-kahlo-in-blue-satin-blouse_u988dl.jpg",
        width: 1200,
        height: 630,
        alt: "Frida Kahlo Art Gallery at Shantibari",
      },
    ],
    url: "https://shantibaribd.org/gallery-frida-kahlo",
    type: "website",
    locale: "en_BD",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Frida Kahlo Art Gallery - Shantibari",
    description: "A celebration of female artists at the Shantibari Frida Kahlo Art Gallery.",
    images: ["https://res.cloudinary.com/db5yniogx/image/upload/v1735389656/frida-kahlo-in-blue-satin-blouse_u988dl.jpg"],
    site: "@shantibari_bd",
  },
};

const artData = [
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735385351/Sajj_Dilruba-Papia-835x1024cloud_pjv1wu.jpg",
      title: "সাঁজ",
      artist: "Artist: Dilruba Papia",
      price: "Price: 75000 (BDT)",
      size: "Size:  3'/3'7\"",
      medium: "Medium: Oil Painting"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735385605/tumicloud_isto8h.jpg",
      title: "তুমি",
      artist: "Artist: Dilruba Papia",
      price: "Price: 75000 (BDT)",
      size: "Size: 3'/3'7\"",
      medium: "Medium: Oil Painting"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735385773/Beyond-the-Sky_Out-of-the-Blue-1_Lubna-Habib-768x774_z5g1y2.jpg",
      title: "Beyond the Sky, Out of the Blue:01",
      artist: "Artist: Lubna Habib",
      price: "Price: 25000 (BDT)",
      size: "Size: 2'/2'",
      medium: "Medium: Acrylic on Canvas"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735385994/Beyond-the-Sky_Out-of-the-Blue-2_Lubna-Habib-768x767cloud_tfod6z.jpg",
      title: "Beyond the Sky, Out of the Blue:02",
      artist: "Artist: Lubna Habib",
      price: "Price: 25000 (BDT)",
      size: "Size: 2'/2'",
      medium: "Medium: Acrylic on Canvas"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735386229/lubna_kusjuq.png",
      title: "Magnolias Around A Bomb",
      artist: "Artist: Lubna Habib",
      price: "Price: 30000 (BDT)",
      size: "Size: 20\" × 24\"",
      medium: "Medium: Acrylic on Canvas"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735386392/%E0%A6%B8%E0%A7%82%E0%A6%B0%E0%A7%8D%E0%A6%AF%E0%A7%87-%E0%A6%AC%E0%A7%87%E0%A6%81%E0%A6%9A%E0%A7%87-%E0%A6%A5%E0%A6%BE%E0%A6%95%E0%A6%BF_Fuleshwary-Priyanandini-768x1214_cnz27d.jpg",
      title: "সূর্যে বেঁচে থাকি",
      artist: "Artist: Fuleshwary Priya nandini",
      price: "Price: 20000 (BDT)",
      size: "Size: 20\" × 11\"",
      medium: "Medium: Mixed Media"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735386513/%E0%A6%B8%E0%A7%8D%E0%A6%AC%E0%A6%AA%E0%A7%8D%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%A7%E0%A7%8D%E0%A6%AC%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A6%BE_Fuleshwary-Priyanandini_uswsnb.jpg",
      title: "স্বপ্নের ধ্বনিরা",
      artist: "Artist: Fuleshwary Priya nandini",
      price: "Price: 18000 (BDT)",
      size: "Size: 19\" × 15\"",
      medium: "Medium: Mixed Media"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735386734/Poetry-of-the-Forest-1_Monidipa-Dasgupta-771x1024_diqgeh.jpg",
      title: "Poetry of the Forest 1",
      artist: "Artist: Monidipa Das gupta",
      price: "Price: 25000 (BDT)",
      size: "Size: 28 x 36cm",
      medium: "Medium: Acrylic and Pen on Paper"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735386873/Poetry-of-the-Forest-2_Monidipa-Dasgupta-775x1024_bou5n8.webp",
      title: `Poetry of the Forest 2`,
      artist: "Artist: Monidipa Das gupta",
      price: "Price: 25000 (BDT)",
      size: "Size: 28 x 36 cm",
      medium: "Medium: Acrylic and Pen on Paper"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735387060/Color-of-Nature_Mahjabin-Moitry-768x650_jgpdqr.jpg",
      title: "Colour of Nature",
      artist: "Artist: Mahjabin Rahim Moitri",
      price: "Price: 20000 (BDT)",
      size: "Size: 36\"/24\"",
      medium: "Medium: Mixed Media"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735387176/Wings_Mahjabin-Moitry-768x603_dux6em.jpg",
      title: "Wings",
      artist: "Artist: Mahjabin Rahim Moitri",
      price: "Price: 15000 (BDT)",
      size: "Size: 24\"/18\"",
      medium: "Medium: Mixed Media"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735387315/Dreams_Sumana-Biswas-863x1024_xxdzra.jpg",
      title: "Dreams",
      artist: "Artist: Sumana Biswas",
      price: "Not for Sale",
      size: "Size: 20\"/24\"",
      medium: "Medium: Acrylic on Canvas"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735387454/Folk-Motifs-of-Bangladesh_Dr.-Jahura-Khatun-768x748_zm7jsn.jpg",
      title: "Folk Motif of Bangladesh",
      artist: "Artist: Dr. Jahura Khatun",
      price: "Price: 15000 (BDT)",
      size: "Size: 24\"/24\"",
      medium: "Medium: Acrylic"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735387568/Women-with-Nature_Dr.-Jahura-Khatun-768x759_edwbdk.jpg",
      title: "Women with Nature",
      artist: "Artist: Dr. Jahura Khatun",
      price: "Price: 20000 (BDT)",
      size: "Size: 24\"/24\"",
      medium: "Medium: Acrylic"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735387698/%E0%A6%9C%E0%A6%9F%E0%A6%BF%E0%A6%B2%E0%A6%A4%E0%A6%BE%E0%A6%B0-%E0%A6%A7%E0%A6%BE%E0%A6%81%E0%A6%A7%E0%A6%BE%E0%A6%AF%E0%A6%BC-%E0%A6%AE%E0%A6%BF%E0%A6%B6%E0%A7%8D%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A4%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE_Nazmun-Nahar-768x1024_ysiefg.jpg",
      title: "জটিলতার ধাঁধায় মিশ্র প্রতিক্রিয়া/ Mixed Reactions to the Puzzle of Complexity",
      artist: "Artist: Nazmun Nahar",
      price: "Price: 135000 (BDT)",
      size: "Size: 28\"/35\"",
      medium: "Medium: Acrylic on Canvas"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735387848/Resilience-in-Bloom_Ishrat-Rouf_vltode.jpg",
      title: "Resilience in Bloom",
      artist: "Artist: Ishrat Binte Rouf",
      price: "Price: 10000 (BDT)",
      size: "Size: 24\"/20\"",
      medium: "Medium: Acrylic on Canvas"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735387989/What-Was-She-Wearing_Ishrat-Rouf-855x1024_emkhnm.jpg",
      title: "What Was She Wearing?",
      artist: "Artist: Ishrat Binte Rouf",
      price: "Price: 10000 (BDT)",
      size: "Size: 24\"/20\"",
      medium: "Medium: Mixed Media"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735388148/%E0%A6%85%E0%A6%AC%E0%A6%9A%E0%A7%82%E0%A6%B0%E0%A7%8D%E0%A6%A3%E0%A6%BF%E0%A6%A4_Nipa-Gomes-1-768x1032_ksuupn.jpg",
      title: "অবচূর্ণিত",
      artist: "Artist: Nipa Gomes",
      price: "Price: 30000 (BDT)",
      size: "Size: 2'/3'",
      medium: "Medium: Acrylic on Canvas"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735388265/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%B0%E0%A7%8D%E0%A6%A3_Nipa-Gomes-2-768x1170_ay6hqp.jpg",
      title: "বিবর্ণ",
      artist: "Artist: Nipa Gomes",
      price: "Price: 30000 (BDT)",
      size: "Size: 2'/3'",
      medium: "Medium: Acrylic on Wood Panel"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735388397/%E0%A6%AD%E0%A7%87%E0%A6%AC%E0%A7%87%E0%A6%9B%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%AE-%E0%A6%AB%E0%A6%BF%E0%A6%B0%E0%A6%AC-%E0%A6%A8%E0%A6%BE-%E0%A6%B0%E0%A7%87_Anjana-Shome-1-771x1024_zvwp5g.jpg",
      title: "ভেবেছিলেম ফিরব না রে",
      artist: "Artist: Anjana Shome",
      price: "Price: 15000 (BDT)",
      size: "Size: 15\"/20\"",
      medium: "Medium: Mixed Media"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735388507/%E0%A6%9D%E0%A6%B0%E0%A6%BE-%E0%A6%AA%E0%A6%BE%E0%A6%B2%E0%A6%95-%E0%A6%AD%E0%A6%BE%E0%A6%B8%E0%A6%BE-%E0%A6%AA%E0%A6%BE%E0%A6%B2%E0%A6%95_Anjana-Shome-771x1024_b5gdnk.jpg",
      title: "ঝরা পালক – ভাসা পালক",
      artist: "Artist: Anjana Shome",
      price: "Price: 15000 (BDT)",
      size: "Size: 15\"/20\"",
      medium: "Medium: Mixed Media"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735388626/Still-Life-1_Fahmida-Jasmine-Camellia-768x676_xpcqnz.jpg",
      title: "Still Life – 1",
      artist: "Artist: Fahmida Jasmine Camellia",
      price: "Not for Sale",
      size: "Size: 12×10",
      medium: "Medium: Oil Painting"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735388724/Still-Life-2_Fahmida-Jasmine-Camellia-768x1023_o0frif.jpg",
      title: "Still life – 2",
      artist: "Artist: Fahmida Jasmine Camellia",
      price: "Not for Sale",
      size: "Size: 12×15",
      medium: "Medium: Oil Painting"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735388820/Self-realization_Shibani-Karmakar-Shilu-853x1024_mchn8n.jpg",
      title: "Self-realization 1",
      artist: "Artist: Shibani Karmakar Shilu",
      price: "Price: 30000 (BDT)",
      size: "Size: 24/20",
      medium: "Medium: Mixed Media"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735388937/Self-realization.Shibani-Karmakar-Shilu-845x1024_jktoet.jpg",
      title: "Self-realization 2",
      artist: "Artist: Shibani Karmakar Shilu",
      price: "Price: 30000 (BDT)",
      size: "Size: 24/20",
      medium: "Medium: Mixed Media"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735389119/Ma-01_Mst.-Mukti-Khatun-917x1024_njbebo.jpg",
      title: "Ma (মা) – 01",
      artist: "Artist: Mst. Mukti Khatun",
      price: "Price: 20000 (BDT)",
      size: "Size: 22\" x  24\"",
      medium: "Medium: Acrylic on Canvas Paper"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735389234/Ma-02_Mst.-Mukti-Khatun-768x1073_xm5e9n.jpg",
      title: "Ma (মা) – 02",
      artist: "Artist: Mst. Mukti Khatun",
      price: "Price: 20000 (BDT)",
      size: "Size: 20\" x  26\"",
      medium: "Medium: Acrylic on Canvas Paper"
    },
    {
      image: "https://res.cloudinary.com/db5yniogx/image/upload/v1735389331/Ma-03_Mst.-Mukti-Khatun-768x1086_bhuw5b.jpg",
      title: "Ma (মা) – 03",
      artist: "Artist: Mst. Mukti Khatun",
      price: "Price: 20000 (BDT)",
      size: "Size: 20\" x  26\"",
      medium: "Medium: Acrylic on Canvas Paper"
    },
];

function FridaKahloGallery() {
  const generateStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Frida Kahlo Art Gallery - Shantibari",
      "description": "A collection of artworks by various female artists.",
      "url": "https://shantibaribd.org/gallery-frida-kahlo",
      "image": artData.map(art => ({
        "@type": "ImageObject",
        "contentUrl": art.image,
        "name": art.title,
        "creator": {
          "@type": "Person",
          "name": art.artist.replace("Artist: ", "")
        },
        "description": `${art.title} - ${art.medium}. Size: ${art.size}. Price: ${art.price}.`
      }))
    };
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/db5yniogx/image/upload/v1735389656/frida-kahlo-in-blue-satin-blouse_u988dl.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center px-4 text-white">
            Gallery Frida Kahlo
          </h1>
        </div>
      </div>

      {/* Art Gallery Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Featuring contemporary artworks by talented Bangladeshi female artists. 
            Each piece tells a unique story of culture, identity, and feminine expression.
          </p>
        </div>
        
        <h2 className="sr-only">Artwork Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artData.map((art, index) => (
            <article 
              key={index} 
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              itemScope
              itemType="https://schema.org/VisualArtwork"
            >
              {/* Image */}
              <div className="w-full aspect-square">
                <img
                  src={art.image}
                  alt={`Artwork: ${art.title} by ${art.artist}`}
                  className="object-contain w-full h-full"
                  itemProp="image"
                  loading={index > 5 ? "lazy" : "eager"}
                />
              </div>
              
              {/* Art Details */}
              <div className="p-5">
                <h3 className="font-bold text-xl mb-2 text-gray-900" itemProp="name">
                  {art.title}
                </h3>
                
                <div itemProp="creator" itemScope itemType="https://schema.org/Person">
                  <p className="text-gray-600 mb-2">
                    <span itemProp="name">{art.artist.replace("Artist: ", "")}</span>
                  </p>
                </div>
                
                <p className="text-gray-600 mb-2" itemProp="artMedium">
                  {art.medium}
                </p>
                
                <p className="text-gray-600 mb-2" itemProp="size">
                  {art.size}
                </p>
                
                <p className="text-gray-800 font-medium mt-3">
                  {art.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FridaKahloGallery;