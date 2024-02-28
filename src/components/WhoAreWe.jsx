import "./styles/WhoAreWe.css";
import sideImg from "../Assets/SideContent.png";

function WhoAreWe() {
  return (
    // <div className="container">
    //   <div className="box one">
    //     <h2 className="main-heading">Transform Your Digital Presence with Expert Web Development & Social Media Marketing</h2>
    //     <p className="main-heading-description">
    //     Revamp your online presence with our skilled team in web development and social media marketing. Think of it as a makeover for your digital identity. We'll make your website top-notch and ensure your brand shines across social media. It's like giving your online story a fresh and appealing look!
    //     </p>
    //     <button class="custom-button">Explore Our Services</button>
    //   </div>
    //   <div className="box two">
    //     <img src={sideImg} alt="Web Development" />
    //   </div>
    <div className="p-5">
      <div className="container">
      <div className="d-flex row justify-content-center">
        <div className="col-md-6">
          <h2 className="main-heading">Transform Your Digital Presence with Expert Web Development & Social Media Marketing</h2>
          <p className="main-heading-description">
          Revamp your online presence with our skilled team in web development and social media marketing. Think of it as a makeover for your digital identity. We'll make your website top-notch and ensure your brand shines across social media. It's like giving your online story a fresh and appealing look!
          </p>
          <button class="custom-button">Explore Our Services</button>
        </div>
        <div className="col-md-4">
          <img src={sideImg} alt="Image Description" className="img-fluid" />
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default WhoAreWe;
