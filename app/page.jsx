import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HotMenu from "@/components/HotMenu";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Products />
      <HotMenu />
      <About />
      <Footer />
    </main>
  );
}
