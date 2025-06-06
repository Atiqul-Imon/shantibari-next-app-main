import Link from "next/link";


function CulturalDevelopment() {
  return (
    <div className="w-full bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://res.cloudinary.com/db5yniogx/image/upload/v1735719769/shantibariculture02_bfivjo_cb1341.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white py-32">
          <h1 className="text-4xl font-bold">Cultural Development Program</h1>
          <p className="mt-4 text-xl">
            Empowering Women Through Arts and Culture
          </p>
        </div>
      </div>

      {/* Program Details Section */}
      <div className="max-w-[1440px] mx-auto px-4 py-12 text-center">
        <div className="text-xl font-roboto text-gray-800"></div>

        {/* Two Cards Section */}
        <div className="flex flex-wrap justify-center gap-6">
  {/* First Card - About Program */}
  <div className="flex-1 min-w-[350px] max-w-[500px] p-8 bg-white rounded-lg shadow-lg">
    <div className="mb-4">
      <img
        src="https://res.cloudinary.com/db5yniogx/image/upload/v1735719304/shantibariculture_zg2f9w.jpg"
        alt="Cultural Event"
        className="w-full h-96 object-cover rounded-lg"
      />
    </div>
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
      About the Program
    </h3>
    <p className="text-gray-600">
      The Cultural Development Program of Shantibari takes pride in its
      commitment to women’s empowerment through various cultural
      initiatives. Regular cultural events specifically dedicated to
      women are organized, providing a platform for talented women to
      showcase their skills and artistic talents. These events not only
      celebrate women’s creativity but also encourage their active
      participation in the cultural life of the community. Additionally,
      Shantibari’s art gallery offers opportunities for women
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
    <div className="mb-4">
      <img
        src="https://res.cloudinary.com/db5yniogx/image/upload/v1735719172/cultural_r4dudl.jpg"
        alt="Art Gallery"
        className="w-full h-96 object-cover rounded-lg"
      />
    </div>
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
      Shantibari's Gallery
    </h3>
    <p className="text-gray-600">
      Welcome to Shantibari’s gallery, where art and photography
      enthusiasts are invited to immerse themselves in a captivating
      world of creativity and expression. Our exhibition facilities
      boast a seamless blend of modern aesthetics and cultural heritage,
      providing the perfect backdrop to showcase the diverse and
      inspiring works of both established and emerging artists. With
      ample space and carefully curated lighting, the gallery exudes an
      ambiance that allows each piece to shine vibrantly and engage the
      senses of every visitor. Whether you are an admirer of traditional
      art or a lover of contemporary photography, Shantibari’s gallery
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
        <Link href="/services" className="text-blue-600 hover:text-blue-500">
          Back to Our Services
        </Link>
      </div>
    </div>
  );
}

export default CulturalDevelopment;