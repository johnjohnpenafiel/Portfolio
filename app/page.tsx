import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <section className="w-full items-center justify-center -mt-[65px]">
        <Hero />
      </section>
    </div>
  );
}

export default Home;
