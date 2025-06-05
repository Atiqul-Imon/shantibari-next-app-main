import CharityMorganCafe from "@/component/CharityMorganCafe";
import FounderMembers from "@/component/FounderMembers";
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
   <HeroSection />
   <FounderMembers />
   <OurAdvisors />
   <OurLawyers />
   <PsychiatristPsychologist />
   <OurServices />
   <OurTeam />
   <CharityMorganCafe />
   </>
  );
}
