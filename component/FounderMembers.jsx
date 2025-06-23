import Image from 'next/image';
import Link from 'next/link';
import members from '@/lib/data/founders';

const FounderMembers = () => {
  return (
    <section className="bg-gray-100 py-12 w-full">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-10 font-playfair">
          Founder Members
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {members.map(({ id, name, title, imgSrc }) => (
            <Link key={id} href={`/founder/${id}`} className="group">
              <div className="w-60 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border border-gray-300">
                  <Image
                    src={imgSrc}
                    alt={`${name}, ${title} of Shantibari`}
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
