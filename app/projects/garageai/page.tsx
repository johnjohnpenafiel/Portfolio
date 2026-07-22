import { Metadata } from "next";
import { Archivo } from "next/font/google";

import GarageHero from "./components/GarageHero";
import StaffBoxSection from "./components/StaffBoxSection";
import PipelineSection from "./components/PipelineSection";
import CadenceSection from "./components/CadenceSection";
import SurfacesSection from "./components/SurfacesSection";
import LedgerSection from "./components/LedgerSection";
import GarageFooter from "./components/GarageFooter";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "The Garage AI | John John's Portfolio",
  description:
    "An automated AI publication for the dealership world — researched, written, judged, illustrated, and published by a multi-model pipeline, three mornings a week.",
};

export default function GarageAIPage() {
  return (
    <div
      className={`${archivo.variable} min-h-screen -mt-[64px] cursor-default`}
    >
      <div className="px-8 md:px-16">
        <GarageHero />
        <StaffBoxSection />
        <PipelineSection />
        <CadenceSection />
        <SurfacesSection />
        <LedgerSection />
        <GarageFooter />
      </div>
    </div>
  );
}
