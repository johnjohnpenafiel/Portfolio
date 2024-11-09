import Hero from "@/components/Hero";
import Work from "@/components/Work";

function Home() {
  return (
    <div>
      <section className="-mt-[64px]">
        <Hero />
      </section>
      <div className="flex h-52 items-center justify-center || bg-[#f9fafb]  text-xl md:text-2xl text-stone-800 font-medium">
        Projects
      </div>
      <section>
        <Work />
      </section>
    </div>
  );
}

export default Home;
