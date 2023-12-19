import React from 'react'
import Navbar from './Navbar'
import LandingBackground from "../Assets/landing-page-background.png"
import Headshot from "../Assets/headshot.png"
import { FiArrowRight } from "react-icons/fi"

const Home = () => {
  return (
    <div class = "home-container"> 
    <Navbar/>

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src= {LandingBackground} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Home