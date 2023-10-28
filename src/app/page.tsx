import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Career from "@/sections/Career";
import Servises from "@/sections/Services";
import Gallery from "@/sections/Gallery";
import Contacts from "@/sections/Contacts";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Servises />
      <Career />
      <Gallery />
      <Contacts />
    </main>
  );
}
