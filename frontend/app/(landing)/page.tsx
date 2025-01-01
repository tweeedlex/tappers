import Header from "@/components/layout/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <div className="flex flex-col items-center font-[family-name:var(--font-outfit-sans)]">
      <Header />
      <Hero />
      <Stats />
    </div>
  );
}
