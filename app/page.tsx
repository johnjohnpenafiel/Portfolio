import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";

function Home() {
  return (
    <div>
      {/* ----- HERO SECTION ----- */}
      <section className="-mt-[64px]">
        <Hero />
      </section>
      {/* ----- PROJECT SECTION ----- */}
      <section>
        <div className="flex flex-col h-44 items-center justify-center || bg-[#f9fafb] dark:bg-black">
          <div className="border-b w-8 border-gray-400"></div>
          <p className="text-xl md:text-2xl text-stone-800 dark:text-neutral-200 font-medium mb-3">
            Projects
          </p>
        </div>
        <ProjectSection />
      </section>
    </div>
  );
}

export default Home;
