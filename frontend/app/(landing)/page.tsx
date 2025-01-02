import Header from "@/components/layout/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";

export default function Home() {
  return (
    <div className="flex flex-col items-center font-[family-name:var(--font-outfit-sans)]">
      <Header />
      <Hero />
      <Stats />
      <Portfolio />
      <Reviews />
    </div>
  );
}
