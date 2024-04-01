import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Webdevelopment from "./pages/Webdevelopment";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import TestComponent from "./components/TestComponent"; 
import React from 'react';
import Hero from "./pages/Home/Hero/Hero";
import Services from "./pages/Home/Services/Services";
import WhyChooseUs from "./pages/Home/WhyChooseUs/WhyChooseUs";
import CustomerReviews from "./pages/Home/Customer Reviews/CustomerReviews";
import ContactUs from "./pages/Home/Contact Us/ContactUs";

 

function App() {
 

  return (
    <div className="App">
      <Router>
        <Navigation />
          <Switch>
            <Route exact path="/">
              <Hero/>
              <Services/>
              <WhyChooseUs/>
              <CustomerReviews/>
              <ContactUs/>
            </Route>
            <Route path="/contact-us">
              <Contacts />
            </Route>
            <Route path="/services">
              <Webdevelopment />
            </Route>
            <Route path="/about-us">
              <AboutUs/>
            </Route>
            <Route path="/test" >
              <TestComponent />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
