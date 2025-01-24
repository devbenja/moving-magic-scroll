import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { OurWork } from "@/components/OurWork";
import { Contact } from "@/components/Contact";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <OurWork />
      <Contact />
      <WhatsAppButton />
    </main>
  );
};

export default Index;