import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { OurWork } from "@/components/OurWork";
import { Contact } from "@/components/Contact";
import { Location } from "@/components/Location";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Navbar } from "@/components/Navbar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1">
          <Navbar />
          <div className="overflow-hidden">
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <OurWork />
            <Location />
            <Contact />
            <WhatsAppButton />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;