import Hero from "@/components/Hero";
import Work from "@/components/Work";

function Home() {
  return (
    <div>
      <section className="-mt-[64px]">
        <Hero />
      </section>
      <div className="flex h-52 items-center justify-center || bg-[#f9fafb]  text-xl md:text-3xl font-medium">
        WORK
      </div>
      <section>
        <Work />
      </section>
    </div>
  );
}

export default Home;
