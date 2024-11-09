import Hero from "@/components/Hero";
import Work from "@/components/Work";

function Home() {
  return (
    <div>
      <section className="-mt-[64px]">
        <Hero />
      </section>
      <div className="flex flex-col h-52 items-center justify-center || bg-[#f9fafb]">
        <div className="border-b w-8 border-gray-500"></div>
        <div className="text-xl md:text-2xl text-stone-700 font-medium">
          Projects
        </div>
      </div>
      <section>
        <Work />
      </section>
    </div>
  );
}

export default Home;
