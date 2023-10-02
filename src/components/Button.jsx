import React from 'react'

const Button = ( { onClick, ...props }) => {
  return (
    <div>
        <button 
          className='button'
          onClick={onClick}
        >
            <h2 className='button-label'>{props.children}</h2>
        </button>
    </div>
  )
}

export default Button