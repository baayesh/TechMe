import React from "react";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import WhoAreWe from "../components/WhoAreWe";
import Counter from "../components/Counter";
import Services from "../components/Services";



export default function Home() {
  return (
    <div>
      <Hero/>
      <WhoAreWe/>
      <Counter/>
      <Services/>
      
    </div>
  );
}
