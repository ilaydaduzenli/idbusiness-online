import { Hero } from "@/components/Hero";
import { StackMarquee } from "@/components/StackMarquee";
import { AICapabilities } from "@/components/AICapabilities";
import { RealWorldImpact } from "@/components/RealWorldImpact";
import { MarketingChannels } from "@/components/MarketingChannels";
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
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 dark:via-white/10 to-transparent" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 selection:bg-zinc-900/10 dark:selection:bg-white/20 overflow-x-hidden transition-colors">
      <Hero />
      <StackMarquee />
      <AICapabilities />
      <RealWorldImpact />
      <MarketingChannels />

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
