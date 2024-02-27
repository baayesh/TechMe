import React from "react";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import WhoAreWe from "../components/WhoAreWe";
import Counters from "../components/Counter";


export default function Home() {
  return (
    <div>
      <Hero/>
      <WhoAreWe/>
      <Counters/>
    </div>
  );
}
