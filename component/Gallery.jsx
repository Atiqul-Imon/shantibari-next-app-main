'use client'

import React, {useState} from 'react'

function Gallery() {
const [allPhotos, setAllPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const LIMIT = 20;





  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };





  const photos = [

    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043749/005_whcvso.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043749/046_okqqvs.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043749/023_ozxsst.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043749/016_cxy8ew.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043749/006_l54594.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043749/002_vf6nky.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043748/021_rhxth4.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043748/011_ovs2tn.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043748/019_bcuwg1.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043748/022_doczxt.jpg",
    'https://res.cloudinary.com/db5yniogx/image/upload/v1747043748/025_ux8d6x.jpg',
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043749/027_pgffbo.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043750/038_z1k14x.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043748/015_iqnjco.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043748/004_hv20tq.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043747/039_k7jw8l.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043747/018_flbcrb.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043747/003_gzjiwd.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043747/030_mbibsp.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043747/035_nslcig.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043750/029_kkjcir.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043746/031_xt0s1q.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043746/036_drx8v3.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043746/042_xixosv.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043746/041_e7wxeq.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043746/044_swi6yp.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043746/045_u0qk6b.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043745/010_jfelq0.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043745/008_wmimve.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043745/013_g71mwi.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043745/032_uackqo.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043745/034_kdsg4c.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043745/033_lqd7xm.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043744/007_mc9nca.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043744/028_vtnvhs.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043744/009_jpye94.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043744/020_a10nvl.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043744/017_equ6en.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043744/040_csk8az.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043744/037_cmahnw.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043743/043_cofftc.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043743/024_pfgiwl.jpg",
    "https://res.cloudinary.com/db5yniogx/image/upload/v1747043743/026_epmiux.jpg",
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939701/valothakacloud15_nsmhgi.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939567/valothakacloud14_o2cvwo.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939508/valothakacloud13_idtbud.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939456/valothakacloud12_dd1kd8.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939400/valothakacloud11_ixup0l.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939341/valothakacloud10_ybdvog.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939273/valothakacloud9_ftpitn.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939201/valothakacloud8_z4wyqi.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736938959/valothakacloud6.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736938884/valothakacloud4_isebzh.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736939120/valothakacloud7_nwlzys.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736938762/valothakacloud2_kar9l8.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736938691/valothakacloud1_btekow.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736883846/valothaka2_gzv8ln.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736883835/valothaka1_pyeiua.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736883728/valothakarutsob5_oaswl4.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736883675/valothakarutsob4_w84lgi.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736883567/valothakarutsob3_nuehl2.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736883485/valothakarutsob2_o7cojb.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1736883347/valothakarutsob1_kewuqh.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322517/shantibarigallerycloud1_xmazhq.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322515/shantibarigallerycloud2_s2gybw.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322514/shantibarigallerycloud3_bbszh0.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322510/shantibarigallerycloud6_qhb7ua.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322511/shantibarigallerycloud5_mnyjji.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322509/shantibarigallerycloud7_e7kqmg.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322508/shantibarigallerycloud8_kh6cyn.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322451/shantibarigallerycloud10_kyn9us.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322451/shantibarigallerycloud9_okga06.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322532/shantibarigallerycloud12_kjfmgc.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322533/shantibarigallerycloud11_qkf1is.jpg',
    'https://res.cloudinary.com/db5yniogx/image/upload/v1735322512/shantibarigallerycloud4_b50nre.jpg',
  ];

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-gray-900 font-marcellus mb-10">Photos</h2>
      </div>

      <div className="mx-auto px-4">
        <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div key={index} className="break-inside-avoid overflow-hidden  shadow-md">
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-8 ">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="px-6 py-3 bg-gray-200 font-semibold border text-gray-900 disabled:opacity-50"
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;