import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import Work from "@/components/ProjectSection";

function Home() {
  return (
    <div>
      <section className="-mt-[64px]">
        <Hero />
      </section>
      <section className="flex flex-col h-52 items-center justify-center || bg-[#f9fafb]">
        <div className="border-b w-8 border-gray-500"></div>
        <div className="text-xl md:text-2xl text-stone-800 font-medium">
          Projects
        </div>
      </section>
      <section>
        <ProjectSection />
      </section>
    </div>
  );
}

export default Home;
