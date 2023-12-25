import React from 'react'
import Navbar from './Navbar'
import LandingBackground from "../Assets/about-page-background.png"
import Headshot from "../Assets/headshot.png"
import { FiArrowRight } from "react-icons/fi"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import Projects from './Projects';
import {Link } from "react-router-dom";

const About = () => {
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
          <Link to = "/contact" style={{textDecoration: 'none', color: 'black'}}>Contact</Link><PhoneRoundedIcon/>
          </button>
        </div>

      <div className="home-image-container">
        <img src={Headshot} alt="" />
      </div>

      </div>
      
    </div>
  )
}

export default About