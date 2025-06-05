'use client';

import Image from 'next/image';
import Link from 'next/link';

const founders = [
  {
    id: 1,
    name: 'Sharmin Shams',
    title: 'Executive Director',
    imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313071/Sharmin-Shamscloud_z4555l.webp',
  },
  {
    id: 2,
    name: 'Shumee Shahabuddin',
    title: 'Director (Operations)',
    imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313239/Shumee-Shahabuddincloud_aukjp1.webp',
  },
  {
    id: 3,
    name: 'Adv. Nahid Shams',
    title: 'Director (Legal Services)',
    imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/t_Media Coverage/v1735494831/nahidshamsshantibaricloud_wqbzwp.jpg',
  },
  {
    id: 4,
    name: 'Kishowar Zabin',
    title: 'Director',
    imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313767/Kishowar-Zabincloud_vhcbea.webp',
  },
  {
    id: 5,
    name: 'Aparajita Gowswami',
    title: 'Director',
    imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313881/aparajitagowsamicloud_ewbe7f.png',
  },
];

const FounderMembers = () => {
  return (
    <section className="bg-gray-100 py-12 w-full">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-10 font-playfair">
          Founder Members
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {founders.map(({ id, name, title, imgSrc }) => (
            <Link key={id} href={`/founder/${id}`} className="group">
              <div className="w-60 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border border-gray-300">
                  <Image
                    src={imgSrc}
                    alt={name}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold font-roboto text-gray-900">{name}</h3>
                  <p className="text-sm text-gray-600 font-roboto">{title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderMembers;
