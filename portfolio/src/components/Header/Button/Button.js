import React from 'react'
import './Button.css'

export const Button = () => {
  return (
    <div className='container button-container'>

        <a href='#about' className='btn pri'>
            Daha Fazla
        </a>
        <a href='#contact' className='btn sec'>
            Kontak
        </a>

    </div>
  )
}
