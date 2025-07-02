import Image from 'next/image';
import Head from 'next/head';

export const metadata = {
  title: 'Celebrating Jamdani – A Textile Heritage Exhibition | Shantibari',
  description: 'Join us for Celebrating Jamdani – A Textile Heritage Exhibition on July 4, 2025. Discover our rich textile legacy through design, dialogue, and display! Official invitation and event details inside.',
  openGraph: {
    title: 'Celebrating Jamdani – A Textile Heritage Exhibition | Shantibari',
    description: 'Join us for Celebrating Jamdani – A Textile Heritage Exhibition on July 4, 2025. Discover our rich textile legacy through design, dialogue, and display! Official invitation and event details inside.',
    url: 'https://shantibari.org/celebrating-jamdani',
    type: 'website',
    images: [
      {
        url: '/images/jamdaniutsob.webp',
        width: 1200,
        height: 630,
        alt: 'Celebrating Jamdani – A Textile Heritage Exhibition',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celebrating Jamdani – A Textile Heritage Exhibition | Shantibari',
    description: 'Join us for Celebrating Jamdani – A Textile Heritage Exhibition on July 4, 2025. Discover our rich textile legacy through design, dialogue, and display! Official invitation and event details inside.',
    images: ['/images/jamdaniutsob.webp'],
  },
};

export default function CelebratingJamdaniPage() {
  return (
    <main className="min-h-screen flex flex-col items-center py-8 px-4 bg-gradient-to-br from-pink-50 via-rose-100 to-amber-50 relative overflow-hidden">
      <Head>
        <title>Celebrating Jamdani – A Textile Heritage Exhibition | Shantibari</title>
        <meta name="description" content="Join us for Celebrating Jamdani – A Textile Heritage Exhibition on July 4, 2025. Discover our rich textile legacy through design, dialogue, and display! Official invitation and event details inside." />
        <meta property="og:title" content="Celebrating Jamdani – A Textile Heritage Exhibition | Shantibari" />
        <meta property="og:description" content="Join us for Celebrating Jamdani – A Textile Heritage Exhibition on July 4, 2025. Discover our rich textile legacy through design, dialogue, and display! Official invitation and event details inside." />
        <meta property="og:image" content="/images/jamdaniutsob.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shantibari.org/celebrating-jamdani" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Celebrating Jamdani – A Textile Heritage Exhibition | Shantibari" />
        <meta name="twitter:description" content="Join us for Celebrating Jamdani – A Textile Heritage Exhibition on July 4, 2025. Discover our rich textile legacy through design, dialogue, and display! Official invitation and event details inside." />
        <meta name="twitter:image" content="/images/jamdaniutsob.webp" />
      </Head>
      {/* Decorative floral/textile background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="floral" patternUnits="userSpaceOnUse" width="120" height="120">
              <circle cx="60" cy="60" r="50" fill="#fbbf24" />
              <circle cx="60" cy="60" r="30" fill="#f472b6" />
              <circle cx="60" cy="60" r="15" fill="#f9fafb" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#floral)" />
        </svg>
      </div>
      <section className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-rose-200 z-10 bg-white/90 backdrop-blur">
        <Image
          src="/images/jamdaniutsob.webp"
          alt="Celebrating Jamdani – A Textile Heritage Exhibition Invitation"
          width={1200}
          height={1600}
          className="w-full h-auto object-cover"
          priority
        />
      </section>
      <section className="w-full max-w-2xl bg-white/95 rounded-3xl shadow-lg p-8 text-center z-10 border-2 border-amber-100">
        <h1 className="text-4xl md:text-5xl font-extrabold text-rose-600 mb-4 tracking-tight drop-shadow-lg">Celebrating Jamdani</h1>
        <p className="text-xl mb-6 text-amber-700 font-medium">A Textile Heritage Exhibition for Women</p>
        <div className="text-left text-rose-900 mb-6 leading-relaxed text-lg">
          <p>Hello!</p>
          <p className="mt-2">I hope you're doing well.</p>
          <p className="mt-2">I'm delighted to invite you to <b>"Celebrating Jamdani – A Textile Heritage Exhibition"</b>. The event will take place on <b>Friday, July 4, 2025</b>.</p>
          <p className="mt-2">I'm sharing the official invitation letter with all the details. Looking forward to seeing you there!</p>
          <p className="mt-4 font-semibold">Warm regards,</p>
          <p>Sabreena S. Badhan<br/>Program Executive,<br/>Shantibari<br/>3/1, Block-F, Flat-5A, Lalmatia, Dhaka<br/>01707937809 | 01936012413</p>
        </div>
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 text-white px-8 py-3 rounded-full font-bold text-lg shadow-md hover:scale-105 transition-transform"
        >
          Back to Home
        </a>
      </section>
      {/* Our Location Section with Google Map */}
      <section className="w-full max-w-2xl mt-10 mb-8 bg-rose-50/60 rounded-3xl shadow p-6 z-10 border border-amber-100 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-rose-700 mb-4 text-center">Our Location</h2>
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.7525685504634!2d90.3673694!3d23.7562013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf50d0b3e65d%3A0x1aea194f96079cd5!2s3%2F1%20Block%20%23%20F%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1749401385881!5m2!1sen!2sbd"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shantibari Location on Google Map"
            className="rounded-lg"
          ></iframe>
        </div>
      </section>
    </main>
  );
} 