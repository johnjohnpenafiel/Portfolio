import { Metadata } from "next";
import SirenbaseHero from "./components/SirenbaseHero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ImpactSection from "./components/ImpactSection";
import TechDecisionsSection from "./components/TechDecisionsSection";
import BuiltWithAISection from "./components/BuiltWithAISection";
import RoadmapSection from "./components/RoadmapSection";

export const metadata: Metadata = {
  title: "Sirenbase | John John's Portfolio",
  description:
    "A digital operations platform built for a working coffeehouse — replacing fragmented daily workflows with fast, accountable digital operations.",
};

export default function SirenbasePage() {
  return (
    <div className="min-h-screen -mt-[64px] cursor-default">
      <div className="px-8 md:px-16">
        <SirenbaseHero />
        <ProblemSection />
        <SolutionSection />
        <ImpactSection />
        <TechDecisionsSection />
        <BuiltWithAISection />
        <RoadmapSection />
      </div>
    </div>
  );
}
