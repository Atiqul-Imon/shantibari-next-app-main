import CharityMorganCafe from "@/component/CharityMorganCafe";
import FounderMembers from "@/component/FounderMembers";
import Gallery from "@/component/Gallery";
import HeroSection from "@/component/HeroSection";
import OurAdvisors from "@/component/ourAdvisor";
import OurLawyers from "@/component/OurLawyer";
import OurServices from "@/component/OurServices";
import OurTeam from "@/component/OurTeam";
import PsychiatristPsychologist from "@/component/PsychiatristPsychologist";
import Image from 'next/image';
import Link from 'next/link';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Shantibari",
  "url": "https://shantibaribd.org/",
  "logo": "https://shantibaribd.org/images/logo.jpg",
  "image": "https://shantibaribd.org/images/hero-bg.jpeg",
  "description": "Shantibari is a women's organization, based in Dhaka, Bangladesh, which aims to empower women through psychology, law, wellness, and community development services.",
  "foundingDate": "2022-07",
  "founder": {
    "@type": "Organization",
    "name": "Feminist Factor"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3/1, Block # F, Lalmatia",
    "addressLocality": "Dhaka",
    "addressCountry": "BD"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+8801325167271",
    "email": "info@shantibaribd.org",
    "contactType": "Customer Service",
    "areaServed": "BD"
  },
  "sameAs": [
    "https://www.facebook.com/shantibari24",
    "https://www.instagram.com/shantibari24",
    "https://www.linkedin.com/in/shantibari-ltd/"
  ],
  "hasMap": "https://www.google.com/maps/place/3%2F1,+Block+%23+F,+Lalmatia,+Dhaka,+Bangladesh"
};

export const metadata = {
  title: "Shantibari Home",
  description: "Shantibari is a women's organization in Dhaka, Bangladesh, aiming to empower women through multifaceted activities.",
  alternates: {
    canonical: "https://shantibaribd.org/",
  },
  openGraph: {
    title: "Welcome to Shantibari",
    description: "Explore our expert services in psychology, law, community care, and more.",
    images: "/images/hero-bg.jpeg",
    url: "https://shantibaribd.org/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to Shantibari",
    description: "Comprehensive care from professionals in psychology, law, wellness and more.",
    images: "/images/hero-bg.jpeg",
  },
};

function JamdaniPromoBanner() {
  return (
    <section className="w-full flex justify-center my-0 py-0 bg-gray-100">
      <div className="w-full max-w-4xl bg-gradient-to-br from-pink-50 via-rose-100 to-amber-50 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center border-2 border-rose-200">
        <Image
          src="/images/jamdaniutsob.webp"
          alt="Celebrating Jamdani – A Textile Heritage Exhibition for Women Invitation"
          width={400}
          height={533}
          className="object-cover w-full md:w-1/2 h-auto rounded-3xl shadow-lg border-2 border-amber-100"
        />
        <div className="p-8 flex-1 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-rose-600 mb-2 tracking-tight drop-shadow">Celebrating Jamdani</h2>
          <p className="mb-4 text-amber-700 text-lg font-medium">A Textile Heritage Exhibition for Women in Dhaka<br/><span className="font-semibold text-rose-500">July 4, 2025</span></p>
          <p className="mb-4 text-gray-700">Discover our rich textile legacy through design, dialogue, and display. <span className="font-semibold">Official invitation and event details inside.</span></p>
          <Link href="/celebrating-jamdani">
            <span className="inline-block bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform cursor-pointer shadow-md">See Invitation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <FounderMembers />
      <OurAdvisors />
      <OurLawyers />
      <PsychiatristPsychologist />
      <JamdaniPromoBanner />
      <OurServices />
      <OurTeam />
      <CharityMorganCafe />
      <Gallery />
    </>
  );
}
