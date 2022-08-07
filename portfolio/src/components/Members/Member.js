import React from 'react'
import '../Members/Members.css'
const Member = () => {
  return (
    <div id='members' className='container members-container'>
        <h1 className='member-txt'>Member</h1>

        <div className='member member-1'>

            <div className='member-img'></div>  
            <div className='member-info'>
                <h1 className='name'></h1>
                <h3 className='position'>Back-End</h3>
                <h4 className='about'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </h4>
                <a href='#contact' className='contact-member'>
                    <span>contact</span>
                </a>
            </div>

        </div>
        <div className='member member-1'>

        <div className='member-img'></div>  
            <div className='member-info'>
                <h1 className='name'></h1>
                <h3 className='position'>Back-End</h3>
                <h4 className='about'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </h4>
                <a href='#contact' className='contact-member'>
                    <span>contact</span>
                </a>
            </div>

        </div>
    </div>
  )
}

export default Member