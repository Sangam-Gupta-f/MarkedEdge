import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Clients from "@/components/clients";
import WhyAdcure from "@/components/why-adcure";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <main>
      <Hero />
            <Services />
      <Clients />
      <WhyAdcure />
      <FAQ />
      <Footer />
    </main>
  )
}
