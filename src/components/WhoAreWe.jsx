import "./styles/WhoAreWe.css";
import sideImg2 from "../Assets/SideContent.gif"; // Import only the used image

function WhoAreWe() {
  return (
    <div className="p-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3 className="animate-charcter text-left">
              Transform Your Digital Presence with Expert Web Development &
              Social Media Marketing
            </h3>
            <p className="main-heading-description">
              Revamp your online presence with our skilled team in web
              development and social media marketing. Think of it as a makeover
              for your digital identity. We'll make your website top-notch and
              ensure your brand shines across social media. It's like giving
              your online story a fresh and appealing look!
            </p>
            <button className="custom-button">Explore Our Services</button>
          </div>
          <div className="col-md-4">
            <img src={sideImg2} alt="Image Description" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoAreWe;
