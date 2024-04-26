import React from 'react';
import './Video.css';
import counterVideo from '../../../Assets/Home/Counter__Video/counter__video.mp4';

const Video = () => {
  return (
    <div>
        <div className='hm-vd-container'>
            <video autoPlay loop src={counterVideo}></video>
        </div>
    </div>
  )
}

export default Video