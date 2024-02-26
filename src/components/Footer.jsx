import React from "react";
import './styles/Footer.css'

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
            <div className="footer-column large">
                <h3>TechMe</h3>
                <p>Wara convellus bibendum urno ut viverra. Maecenas quis congequat augue nec elit malesuada. Nunc pulvinar leo vel orci auctor, a tincidunt turpis gravida. Sed posuere consectetur est at lobortis.</p>
            </div>
            <div className="footer-column small">
                <h4>Helpful Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Discover</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-column small">
                <h4>Support</h4>
                <ul>
                    <li><a href="#">Abu Dhabi</a></li>
                    <li><a href="#">Dubai</a></li>
                    <li><a href="#">Sharjah</a></li>
                </ul>
            </div>
            <div className="footer-column small">
                <h4>Contact</h4>
                <ul>
                    <li>+971 50 555 0101</li>
                    <li>contact@yourbrand.com</li>
                </ul>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default Footer;
