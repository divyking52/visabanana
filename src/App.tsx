import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import { useScrollEffects } from "./scroll";
import Trust from "./components/Trust";
import Destinations from "./components/Destinations";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Alerts from "./components/Alerts";
import GlobeCta from "./components/GlobeCta";
import Footer from "./components/Footer";

export default function App() {
  const [query, setQuery] = useState("");
  useScrollEffects();

  return (
    <>
      <Header />
      <main>
        <Hero query={query} onQueryChange={setQuery} />
        <Problem />
        <Trust />
        <Destinations query={query} />
        <HowItWorks />
        <Stats />
        <Pricing />
        <Faq />
        <Alerts />
        <GlobeCta />
      </main>
      <Footer />
    </>
  );
}
