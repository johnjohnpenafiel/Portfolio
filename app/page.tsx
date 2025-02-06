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
        <div className="flex flex-col h-32 items-center justify-center || bg-[#f9fafb] dark:bg-black border-gray-200/80 dark:border-neutral-900/80 mb-11 pt-3 border-y-[1px]">
          <div className="border-b w-8 border-gray-400"></div>
          <p className="text-xl md:text-2xl text-stone-800 dark:text-neutral-200 font-normal cursor-default">
            Projects
          </p>
        </div>
        <ProjectSection />
      </section>
    </div>
  );
}

export default Home;
