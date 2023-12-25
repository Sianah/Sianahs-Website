import React from 'react'
import Navbar from './Navbar';
import ContactBackground from "../Assets/contact-page-background.png"
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

const Contact = () => {
  return (
    <div class = "home-container"> 
    <Navbar/>

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src= {ContactBackground} alt="" />
        </div>
        
        <div className="home-text-section">
          <h1 className="primary-heading" style={{position:'absolute',left:500}}>
          Contact
          </h1>
          <p className="primary-text" style={{position:'absolute',left:400,top:80, }}>
          My email is smallsianah@gmail.com if you would like to email me about anything pertaining 
          to software development. You can also contact me through my linkedIn, Instagram, or Github 
          by pressing the correlating icons below.
          </p>
        </div>

        <div className="footer-icons">

        <a href='https://www.linkedin.com/in/sianah-small-81a688257/'>
        <FaLinkedinIn style={{position:'absolute', right:200, fontSize:45,}}/>
        </a>

        <a href='https://www.instagram.com/sisi_thatsme/'>
        <FaInstagram style={{position:'absolute', right:-90, fontSize:45,}}/>
        </a>
        

        <a href = 'https://github.com/Sianah'>
        <FaGithub style = {{position:'absolute', right:-390, fontSize:45,}}/>
        </a>

        </div>

      </div>
    </div>
  )
}

export default Contact