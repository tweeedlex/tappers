import Header from "@/components/layout/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import Stack from "./components/Stack";
import ActionCall from "./components/ActionCall";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-[50px] l:gap-20 xl:gap-30 items-center font-[family-name:var(--font-outfit-sans)]">
      <Header />
      <Hero />
      <Stats />
      {/*<Portfolio />*/}
      <Reviews />
      <ContactUs />
      <Stack />
      <Works />
      <FAQ />
      <ActionCall />
      <Footer />
    </div>
  );
}
