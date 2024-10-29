import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <section className="w-full items-center justify-center -mt-[65px]">
        <Hero />
        <div className="flex h-52 items-center justify-center text-2xl border-b">
          Work
        </div>
      </section>
    </div>
  );
}

export default Home;
