import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImportanceOfIlmSection from "@/components/ImportanceOfIlmSection";
import InteractiveStoryEngine from "@/components/InteractiveStoryEngine";
import VisionSection from "@/components/VisionSection";
import AspirationsSection from "@/components/AspirationsSection";
import FoundersSection from "@/components/FoundersSection";
import ValuesSection from "@/components/ValuesSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-grow">
        <HeroSection />
        <ImportanceOfIlmSection />
        <InteractiveStoryEngine />
        <VisionSection />
        <AspirationsSection />
        <FoundersSection />
        <ValuesSection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}
