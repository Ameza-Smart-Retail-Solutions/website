import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import FAQSection from "@/components/sections/faq-section";
import FeaturesSection from "@/components/sections/features-section";
import FooterSection from "@/components/sections/footer-section";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero-section";
import ReadyToTransform from "@/components/sections/ready-to-transform";
import WhyAmezaSection from "@/components/sections/why-ameza-section";
import "./hero.css";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ReadyToTransform />
      <AboutSection />
      <WhyAmezaSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
