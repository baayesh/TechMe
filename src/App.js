import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import TestComponent from "./components/TestComponent";
import React from "react";
import Hero from "./pages/Home/Hero/Hero";
import Services from "./pages/Home/Services/Services";
import WhyChooseUs from "./pages/Home/WhyChooseUs/WhyChooseUs";
import CustomerReviews from './components/Customer Reviews/CustomerReviews';
import ContactUs from "./pages/Home/Contact Us/ContactUs";
import ComingSoon from "./pages/Coming Soon/ComingSoon";
import Header from "./components/Header/Header";
import ContactDetails from "./pages/Contact Us/Contact US Details/ContactDetails";
import CusForm from "./pages/Contact Us/Contact Us Form/CusForm";
import Map from "./pages/Contact Us/Map/Map";
import ServicesMain from "./pages/Services Main/Services/Services";
import SubHeader from "./components/Sub Header/Sub Header";
import Service from "./pages/Individual Services/Service Template/Service";
import Heading from './pages/About Us/Heading/Heading';
import VisionAndMission from './pages/About Us/VisionAndMission/VisionAndMission'; 
import OurTeam from "./pages/About Us/OurTeam/OurTeam";

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
            <Header headerText={"Reach Us"} varient={"contact-us"} />
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
            <Heading />
            <VisionAndMission />
            <CustomerReviews />
            <Footer />
          </Route>
          <Route path="/test">
            <TestComponent />
          </Route>
        </Switch>
        <Route path="/coming-soon">
          <Navigation />
          <ComingSoon />
          <Footer />
        </Route>

        {/* Individual Services */}
        {/* Web Development */}
        <Route path="/web-development">
          <Navigation />
          <SubHeader headerText={"Web Development"} />
          <Service
            para='We specialise in creating custom websites that cater to your unique requirements, whether you need a simple informational site or a complex e-commerce platform. Our team collaborates closely with you to design and develop a professional, user-friendly website that reflects your brand identity and engages your audience effectively.
            '
            backgroundImage={"indser-web-dev"}
          />
          <Footer />
        </Route >
        {/* Hosting */}
        <Route path="/hosting">
          <Navigation />
            <SubHeader headerText={"Website Hosting"} />
            <Service
              point1={"Point 1"}
              point2={"Point 2"}
              point3={"Point 3"}
              point4={"Point 4"}
              point5={"Point 5"}
              point6={"Point 6"}
              point7={"Point 7"}
              point8={"Point 8"}
              backgroundImage={"indser-hosting"}
            />
            <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
