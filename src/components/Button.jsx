import React from 'react'

const Button = ({ buttonLabel, onClick }) => {
  return (
    <div>
        <button 
          className='button'
          onClick={onClick}
        >
            <h2 className='button-label'>{buttonLabel}</h2>
        </button>
    </div>
  )
}

export default Button