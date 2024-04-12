import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Webdevelopment from "./pages/Webdevelopment";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import TestComponent from "./components/TestComponent";
import React from "react";
import Hero from "./pages/Home/Hero/Hero";
import Services from "./pages/Home/Services/Services";
import WhyChooseUs from "./pages/Home/WhyChooseUs/WhyChooseUs";
import CustomerReviews from "./pages/Home/Customer Reviews/CustomerReviews";
import ContactUs from "./pages/Home/Contact Us/ContactUs";
import ComingSoon from "./pages/Coming Soon/ComingSoon";
import Header from "./components/Header/Header";
import ContactDetails from "./pages/Contact Us/Contact US Details/ContactDetails";
import CusForm from "./pages/Contact Us/Contact Us Form/CusForm";
import Map from "./pages/Contact Us/Map/Map";
import ServicesMain from "./pages/Services Main/Services/Services";
import SubHeader from "./components/Sub Header/Sub Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navigation />
            <Hero />
            <Services />
            <WhyChooseUs />
            <ContactUs />
            <CustomerReviews />
            <Footer />
          </Route>
          <Route path="/contact-us">
            <Navigation />
            <Header headerText={"Let's Talk"} varient={"contact-us"} />
            <ContactDetails />
            <CusForm />
            <Map />
            <Footer />
          </Route>
          <Route path="/services">
            <Navigation />
            <Header headerText={"Our Services"} varient={"services"} />
            <ServicesMain />
            <Footer />
          </Route>
          <Route path="/about-us">
            <Navigation />
            <Header headerText={"About Us"} varient={"about-us"} />
            <Footer />
          </Route>
          <Route path="/test">
            <TestComponent />
          </Route>
        </Switch>
        <Route path="/coming-soon">
          <ComingSoon />
        </Route>

        {/* Individual Services */}
        {/* Web Development */}
        <Route path="/web-development">
          <Navigation />
          <SubHeader />
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
