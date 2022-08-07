import React from 'react'
import './Home.css'
import img from '../Home/pceng.jpg'
import {BsMouse} from 'react-icons/bs'
import { Button } from '../Button/Button'

function Home(){

  return (
    <div id="home" className='container home-container'>
        <div className='logo'>
            <div className='main-img'>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
           
                

            </div>

            <img src={img} alt=''></img>
        </div>

        <a href='#contact' className='scroll-down'>
            <hr></hr>
                <h5>scroll down</h5>
                <BsMouse className='scroll'></BsMouse>
            <hr></hr>
        </a>
        <h2>
            <span>Hakkımda</span>
            <br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </h2>
        <Button></Button>
    </div>
  )


}



export default Home;




