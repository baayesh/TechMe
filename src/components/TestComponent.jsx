import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import HeroVid from "../Assets/TechMe.mp4";

const YourComponent = () => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY > elementTop - window.innerHeight + elementHeight / 2) {
        controls.start({ opacity: 1, x: 0 });
      } else {
        controls.start({ opacity: 0, x: -100 });
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div>
<div class="col-lg-12">
						<div class="contact-bottom">
							<div class="row">
								
								<div class="col-lg-4 col-md-6 col-sm-12">
									<h5 class="margin-bottom-30">Get in touch</h5>
									<div class="contact-text">
										<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam tempus magna vel turpis pharetra dictum. </p>
										<p>Sed blandit tempus purus, sed sodales leo rutrum vel. Nam vulputate ipsum ac est congue, eget commodo magna lobortis.</p>
									</div>
								</div>
							

								
								<div class="col-lg-8 col-md-6 col-sm-12">
									<div class="contact-form">
										<div class="row">
											<div class="col-lg-6 col-md-12 col-sm-12">
												<input type="text" placeholder="Name, surname"/>
											</div>
											<div class="col-lg-6 col-md-12 col-sm-12">
												<input type="text" placeholder="E-Mail"/>
											</div>
											<div class="col-lg-12">
												<textarea placeholder="Your message"></textarea>
											</div>
											<div class="col-lg-12">
												<button class="btn-primary-line">SEND</button>
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
    </div>
  );
};

export default YourComponent;
