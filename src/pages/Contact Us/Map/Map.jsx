import React from 'react';
import './Map.css'

const Map = () => {
  return (
    <div>
        <div className="map-main">
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2892.5392377350036!2d172.64507033983438!3d-43.53280023023567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s252%20Lichfield%20Street%2C%20Christc%20hurc%20h%20Central%20City%2C%20Christc%20hurc%20h%208011%2C%20New%20Zealand.!5e0!3m2!1sen!2slk!4v1712702562099!5m2!1sen!2slk"  style={{border:0}} allowfullscreen="" loading="lazy"
        className='map-map' referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
    </div>
  )
}

export default Map