import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {TiGroupOutline} from 'react-icons/ti'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {BsArrowDownCircle} from 'react-icons/bs'


const Navbar = () => {
  return (
    <div className='navigation'>
        <a href='#home' className='icon'>
            <AiOutlineHome></AiOutlineHome>
        </a>
        <a href='#about' className='icon'>
            <AiOutlineUser></AiOutlineUser>
        </a>

        <a href='#members' className='icon'>
            <TiGroupOutline></TiGroupOutline >
        </a>
        <a href='#contact' className='icon'>
            <BiMessageRoundedDots></BiMessageRoundedDots>
        </a>
    </div>
  )

 

  function changeactivate(){
    icons.forEach((icon)=>{
        icon.classList.remove('active-nav');
    });
  }
  let icons=document.querySelectorAll('.navigation .icon');
  icons.forEach(icons=>{
  icons.addEventListener('click',()=>{
      changeactivate();
      icons.classList.add('active-nav');
  });
});

}


export default Navbar