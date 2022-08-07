import React from 'react'
import './Talent.css'

const Talent = () => {
  return (
    <div>
        <span id='talent-title' className='talent-text'>Nitelikler</span>
        <div className='talents-container'>
            <div className='talent'>
                <div className='content html'>
                </div>
                <h1>HTML</h1>
            </div>
            <div className='talent'>
                <div className='content asp'>
                </div>
                <h1>ASP.NET</h1>
            </div>

            <div className='talent'>
                <div className='content css'>
                </div>
                <h1>CSS</h1>
            </div>

            <div className='talent'>
                <div className='content js'>
                </div>
                <h1>JS</h1>
            </div>

            <div className='talent'>
                <div className='content react'>
                </div>
                <h1>REACT</h1>
            </div>

        </div>
    </div>
  )
}

export default Talent