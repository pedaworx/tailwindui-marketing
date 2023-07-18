import Header from "@/components/Header";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Teaser from "@/components/Teaser";
import Feature2 from "@/components/Feature2";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
      <Teaser />
      <Feature2 />
      <Faqs />
      <Footer />
    </div>
  );
}
