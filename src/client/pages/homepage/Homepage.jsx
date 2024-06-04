import React, { useState, useEffect } from 'react';
import BranchSlideShow from '../../components/branchSlideShow/BranchSlideShow'
import ImageSlideShow from '../../components/imageSlideShow/ImageSlideShow'
import './Homepage.css'
import logo from './logo1_hapbee.png';
import { useNavigate } from 'react-router-dom'
import { GoArrowDown } from "react-icons/go";


const Homepage = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      document.querySelector('.homepage').style.opacity = '1';
      document.querySelector('.hotel-name img').style.opacity = '1';
    }, 500)
  },[])

  return (
    <div className='homepage'>
      <div className='hero-image'>
        <div className='hotel-name'>
          <img src={logo} alt="HapBee Hotel"/>
        </div>

        <div className='scrolldown'>
            <GoArrowDown size={40}/>
        </div>

        <div className='scrolldown-text'>
          <p>
              SCROLL DOWN<br />
              TO START THE EXPERIENCE
          </p>
        </div>
        
      </div>
      
    </div>
  )
}

export default Homepage