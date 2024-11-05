import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";

function Home() {
  return (
    <div className="lg:mx-[7.2%]">
      <section className="static">
        <Navbar />
      </section>
      <section className="-mt-[64px]">
        <Hero />
      </section>
      <div className="flex h-52 items-center justify-center || text-2xl font-normal border-b">
        Work
      </div>
      <section>
        <Work />
      </section>
    </div>
  );
}

export default Home;
