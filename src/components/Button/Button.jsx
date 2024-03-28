import React from 'react';
import '../Button/styles.css'

const Button = ({text}) => {
  return (
    <div>
        <button className='button-explore'>
          {text}
        </button>
    </div>
  )
}

export default Button