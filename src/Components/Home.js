import React from 'react'
import Navbar from './Navbar'
import LandingBackground from "../Assets/landing-page-background.png"
import Headshot from "../Assets/headshot.png"
import { FiArrowRight } from "react-icons/fi"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Projects from './Projects';

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
          <button className="secondary-button" style={{position:'absolute', left:80, bottom:-20}}>
            Contact<PhoneRoundedIcon/>
          </button>
        </div>

      <div className="home-image-container">
        <img src={Headshot} alt="" />
      </div>

      </div>
      <Projects/>
    </div>
    
  )
  
}

export default Home