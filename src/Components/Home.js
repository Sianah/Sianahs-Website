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
        
        <div className="home-text-section">
          <h1 className="primary-heading">
          Hello! My name is Sianah and I like to make things!
          </h1>
          <p className="primary-text">
          Some of the things I like to make are both mobile and web apps! 
          Down below are a few examples of what I’ve made or have worked on in 
          collaboration with others
          </p>
        </div>
      </div>

    </div>
  )
}

export default Home