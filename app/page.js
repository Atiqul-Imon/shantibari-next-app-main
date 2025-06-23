import CharityMorganCafe from "@/component/CharityMorganCafe";
import FounderMembers from "@/component/FounderMembers";
import Gallery from "@/component/Gallery";
import HeroSection from "@/component/HeroSection";
import OurAdvisors from "@/component/ourAdvisor";
import OurLawyers from "@/component/OurLawyer";
import OurServices from "@/component/OurServices";
import OurTeam from "@/component/OurTeam";
import PsychiatristPsychologist from "@/component/PsychiatristPsychologist";

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
      <OurServices />
      <OurTeam />
      <CharityMorganCafe />
      <Gallery />
    </>
  );
}
