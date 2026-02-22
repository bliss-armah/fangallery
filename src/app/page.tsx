import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <PortfolioShowcase />
      <Footer />
    </div>
  );
}
