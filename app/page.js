import Head from "next/head";
import CharityMorganCafe from "@/component/CharityMorganCafe";
import FounderMembers from "@/component/FounderMembers";
import Gallery from "@/component/Gallery";
import HeroSection from "@/component/HeroSection";
import OurAdvisors from "@/component/ourAdvisor";
import OurLawyers from "@/component/OurLawyer";
import OurServices from "@/component/OurServices";
import OurTeam from "@/component/OurTeam";
import PsychiatristPsychologist from "@/component/PsychiatristPsychologist";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Shantibari</title>
        <meta name="description" content="Shantibari is a women’s organization, based in Dhaka, Bangladesh, which aims to empower women through its multifaceted activities. " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://shantibaribd.org/" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Welcome to Shantibari" />
        <meta property="og:description" content="Explore our expert services in psychology, law, community care, and more." />
        <meta property="og:image" content="/images/hero-bg.jpeg" />
        <meta property="og:url" content="https://shantibaribd.org/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome to Shantibari" />
        <meta name="twitter:description" content="Comprehensive care from professionals in psychology, law, wellness and more" />
        <meta name="twitter:image" content="/images/hero-bg.jpeg" />
     <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Shantibari",
  "url": "https://shantibaribd.org/",
  "logo": "https://shantibaribd.org/images/logo.jpg",
  "image": "https://shantibaribd.org/images/hero-bg.jpeg",
  "description": "Shantibari is a women’s organization, based in Dhaka, Bangladesh, which aims to empower women through psychology, law, wellness, and community development services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3/1, Block # F, Lalmatia", 
    "addressLocality": "Dhaka",
    "addressCountry": "BD"
  },
  "contactPoint": {
    "@type": "ContactPoint",
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
})
    }}
  />
</Head>

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
