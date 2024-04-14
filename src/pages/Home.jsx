import React from "react";
import Hero from "../components/Hero";
import WhoAreWe from "../components/WhoAreWe";
import Counter from "../components/Counter";
import Services from "../components/Services";

import CaseStories from "../components/WebDevelopment/CaseStories";



export default function Home() {
  return (
    <div>
      <Hero/>
      <WhoAreWe/>
      <Counter/>
      <Services/>
     <CaseStories/>
      
    </div>
  );
}
