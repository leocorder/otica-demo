import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ProductsShowcase } from "@/components/ProductsShowcase";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <section id="home">
          <Hero />
        </section>

        <section id="servicos">
          <Services />
        </section>

        <section id="produtos">
          <ProductsShowcase />
        </section>

        <section id="sobre">
          <About />
        </section>

        <section id="contato">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
