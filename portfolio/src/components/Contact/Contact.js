import React from 'react'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import '../Contact/Contact.css'


const Contact = () => {
  return (
    <div id='contact' className='container contact-container'>

        <h1>Contact Me</h1>
        <div className='contact-links'>

            <a href='' className='contact youtube '>
                <AiOutlineYoutube className='icon'></AiOutlineYoutube>
                <h2>Youtube
                    <span>
                    https://www.youtube.com/
                    </span>
                </h2>
            </a>

            <a href='' className='contact face '>

                <AiOutlineFacebook className='icon'></AiOutlineFacebook>
                <h2>Facebook
                    <span>
                    https://www.facebook.com/
                    </span>
                </h2>
            </a>
            

            <a href='' className='contact whatsapp '>
                <AiOutlineWhatsApp className='icon'></AiOutlineWhatsApp>
                <h2>
                    Whatsapp
                    <span>+XXX XXX XX XX</span>
                </h2>
            </a>
            

            <a href='' className='contact instagram '>
                <AiOutlineInstagram className='icon'></AiOutlineInstagram>
                <h2>Instagram
                    <span>
                    https://www.instagram.com/
                    </span>
                </h2>
            </a>
                   

        </div>

    </div>
  )
}

export default Contact