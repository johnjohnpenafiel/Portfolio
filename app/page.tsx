import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <section className="-mt-[65px]">
        <Hero />
      </section>
      <div className="flex h-52 items-center justify-center text-2xl border-b">
        Work
      </div>
      <section>This section is to display Work</section>
    </div>
  );
}

export default Home;
