import React from 'react';
import './WhyChooseUs.css';
import whyChooseUs from '../../../Assets/Home/WhyChooseUs/WhyChooseUs.png'

const WhyChooseUs = () => {
  return (
    <div>
        <div className='hm-why-choose-titlediv'>
            <div className='hm-why-choose-titledivtext'>
                <div className='hm-why-choose-titledivtext1'>
                    <h3>
                        WE CAN DO
                    </h3>
                </div>
                <div className='hm-why-choose-titledivtext2'>
                    <h3>
                        IT TOGETHER
                    </h3>
                </div>
            </div>
            <div className='hm-why-choose-titledivimg'> 
                <img src={whyChooseUs} alt="whyChooseUs" />
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs