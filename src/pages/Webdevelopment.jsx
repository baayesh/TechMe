import React from 'react';
import Hero from '../components/WebDevelopment/Hero';

import OurServices from '../components/WebDevelopment/OurServices';
import LetsTalk from '../components/WebDevelopment/LetsTalk';

// Case stories page is changed into Services Page
function Webdevelopment() {
  return (
    <div>
      <Hero/>
      <OurServices/>
      <LetsTalk/> 
      
    </div>
  )
}

export default Webdevelopment