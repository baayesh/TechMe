import React from 'react';
import './VisionAndMision.css';
import missionImage from '../../../Assets/AboutUs/Mission_Image.png'

const VisionAndMission = () => {
  return (
    <div className='vam-mdiv'>
        <div className="vam-img">
          <img src={missionImage}alt="" />
        </div>
        <h2>MODERN. PROFESSIONAL. RELIABLE.</h2>

    </div>
  )
}

export default VisionAndMission