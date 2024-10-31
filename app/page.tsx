import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <div className="mx-[7.2%]">
      <div className="fixed inset-y-0 left-[50%] w-px border-r border-dashed border-gray-300 -z-10"></div>
      <div className="fixed inset-y-0 left-[28.5%] w-px border-r border-dashed border-gray-300 -z-10"></div>
      <div className="fixed inset-y-0 left-[71.5%] w-px border-r border-dashed border-gray-300 -z-10"></div>

      <Navbar />
      <section className="-mt-[64px]">
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
