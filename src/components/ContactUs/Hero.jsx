import React from 'react';
import './styles/Hero.css';
import contactUs from '../../Assets/Contact us/CONTACT.mp4'

const Hero = () => {
  return (
    <div>
        <div className="row">
            <video autoPlay muted src={contactUs} type="video/mp4"></video>
        </div>
        <div className="row pt-3" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204305.97107301102!2d174.54131432256708!3d-36.859697088791016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2sAuckland%2C%20New%20Zealand!5e0!3m2!1sen!2slk!4v1709256700326!5m2!1sen!2slk" width="1920" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Hero