import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";

function Home() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="-mt-[64px]">
        <Hero />
      </section>
      <div className="flex h-32 items-center justify-center || bg-[#f9fafb] text-2xl font-normal">
        Work
      </div>
      <section>
        <Work />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
