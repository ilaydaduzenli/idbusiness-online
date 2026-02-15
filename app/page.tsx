import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ToolStack } from "@/components/ToolStack";
import { Process } from "@/components/Process";
import { FeaturedModules } from "@/components/FeaturedModules";
import { CaseSnapshots } from "@/components/CaseSnapshots";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function Divider() {
  return (
    <div className="container mx-auto px-4 lg:px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-white/20 overflow-x-hidden">
      <Hero />

      <div className="space-y-4 lg:space-y-0">
        <About />
        <Divider />
        <Services />
        <Divider />
        <ToolStack />
        <Divider />
        <Process />
        <Divider />
        <FeaturedModules />
        <Divider />
        <CaseSnapshots />
        <Divider />
        <WhyUs />
        <Contact /> {/* Divider built into Contact or not needed here */}
        <Footer />
      </div>
    </main>
  );
}
