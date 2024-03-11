import React from 'react';
import Hero from '../components/WebDevelopment/Hero';
import CaseStories from '../components/WebDevelopment/CaseStories';
import OurServices from '../components/WebDevelopment/OurServices';
import LetsTalk from '../components/WebDevelopment/LetsTalk';

function Webdevelopment() {
  return (
    <div>
      <Hero/>
      <OurServices/>
      <LetsTalk/> 
      <CaseStories/>
    </div>
  )
}

export default Webdevelopment