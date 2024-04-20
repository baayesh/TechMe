import React from 'react';
import '../Button/styles.css'

const Button = ({text, link}) => {
  return (
    <div>
        <a href={link}>
          <button className='button-explore'>
            {text}
          </button>
        </a>
    </div>
  )
}

export default Button