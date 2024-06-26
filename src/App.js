import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";
import TestComponent from "./components/TestComponent";
import React from "react";
import Hero from "./pages/Home/Hero/Hero";
import Services from "./pages/Home/Services/Services";
import WhyChooseUs from "./pages/Home/WhyChooseUs/WhyChooseUs";
import CustomerReviews from "./components/Customer Reviews/CustomerReviews";
import ContactUs from "./pages/Home/Contact Us/ContactUs";
import ComingSoon from "./pages/Coming Soon/ComingSoon";
import Header from "./components/Header/Header";
import CusForm from "./pages/Contact Us/Contact Us Form/CusForm";
import ServicesMain from "./pages/Services Main/Services/Services";
import SubHeader from "./components/Sub Header/Sub Header";
import Heading from "./pages/About Us/Heading/Heading";
import VisionAndMission from "./pages/About Us/VisionAndMission/VisionAndMission";
import WebDevelopement from "./pages/Individual Services/Web Development/WebDevelopement";
import Hosting from "./pages/Individual Services/Hosting/Hosting";
import Branding from "./pages/Individual Services/Branding and Logo/Branding";
import WebMaintain from "./pages/Individual Services/Website Maintenance/WebsiteMaintenance";
import RemoteSupport from "./pages/Individual Services/Remote Support/RemoteSupport";
import ComputerAndLaptop from "./pages/Individual Services/Computer Laptop Repair/CompterAndLaptop";
import ComputerUpgrade from "./pages/Individual Services/Computer Upgrade/ComputerUpgrade";
import ComputerVirus from "./pages/Individual Services/Computer Virus/ComputerVirus";
import ReactGA from "react-ga4";

// Scroll to the top functionality
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); //scroll to top of the page
  }, [pathname]);
  return null;
};

// Google Analytics Intergration
ReactGA.initialize("G-S9EB38MSLJ");

// Google analytics - page views
ReactGA.send({ hitType: "pageview", page: window.location.pathname,});

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
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
            <Header headerText={"Reach Out"} varient={"contact-us"} />
            <CusForm />

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
          <WebDevelopement />
          <Footer />
        </Route>
        {/* Hosting */}
        <Route path="/hosting">
          <Navigation />
          <SubHeader headerText={"Website Hosting"} />
          <Hosting />
          <Footer />
        </Route>

        {/* Branding and logo designing */}
        <Route path="/branding">
          <Navigation />
          <SubHeader headerText={"Branding and Logo Designing"} />
          <Branding />
          <Footer />
        </Route>

        {/* Web Maintain*/}
        <Route path="/web-maintain">
          <Navigation />
          <SubHeader headerText={"Website Maintenance"} />
          <WebMaintain />
          <Footer />
        </Route>

        {/* Remote Support*/}
        <Route path="/remote-support">
          <Navigation />
          <SubHeader headerText={"Remote Support"} />
          <RemoteSupport />
          <Footer />
        </Route>

        {/* Computer and Laptop*/}
        <Route path="/computer-and-laptop-repair">
          <Navigation />
          <SubHeader headerText={"Computer and Laptop Repair"} />
          <ComputerAndLaptop />
          <Footer />
        </Route>

        {/* Computer upgrade and serving*/}
        <Route path="/computer-upgrade-and-servicing">
          <Navigation />
          <SubHeader headerText={"Computer Upgrade and Servicing"} />
          <ComputerUpgrade />
          <Footer />
        </Route>

        {/* Virus Removal*/}
        <Route path="/virus-removal">
          <Navigation />
          <SubHeader headerText={"Computer Virus Removal"} />
          <ComputerVirus />
          <Footer />
        </Route>
        {/*  Individual services - finish*/}
      </Router>
    </div>
  );
}

export default App;
