import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
};

export default Index;