import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <div className="relative h-screen w-full">
      {/* Vertical Margin Lines */}
      <div className="absolute top-0 bottom-0 left-[105px] w-[1px] bg-gray-200"></div>
      <div className="absolute top-0 bottom-0 right-[105px] w-[1px] bg-gray-200"></div>

      {/* Horizontal Margin Line for Navbar */}
      <div className="absolute top-[65px] left-[105px] right-[105px] h-[1px] bg-gray-200"></div>
      <div className="absolute w-full">
        <Navbar />
      </div>

      <main className="absolute top-[63px] left-[105px] right-[105px] p-8">
        <section className="h-full flex items-center justify-center">
          <Hero />
        </section>
      </main>
    </div>
  );
}

export default Home;
