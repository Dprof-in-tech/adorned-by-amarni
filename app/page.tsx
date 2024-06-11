import About from "@/components/About";
import Board from "@/components/Board";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-hero bg-contain h-[fit-content] w-[100%] p-4 font-[Garamond]">
      <Navbar />
      <Hero />
      <Image src="/assets/scroll.svg" alt="arrow" width={500} height={500}  className="flex md:hidden h-[105px] w-[125px] mt-12 animate-pulse mx-auto " />
      <Showcase />
      <About />
      <Collection />
      <Board />
      <Testimonials />
      <Footer />
    </main>
  );
}
