import { Hero } from "@/components/hero";
import { MissionSection } from "@/components/mission-section";
import { ProgramsSection } from "@/components/programs-section";
import { ImpactStats } from "@/components/impact-stats";
import { GetInvolvedSection } from "@/components/get-involved-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <ProgramsSection />
      <ImpactStats />
      <GetInvolvedSection />
      <ContactSection />
    </>
  );
}
