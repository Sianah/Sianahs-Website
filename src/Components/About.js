import React from 'react'
import Navbar from './Navbar'
import AboutBackground from "../Assets/about-page-background.png"
import Stetson from "../Assets/stetson-pic.png"

const About = () => {
  return (
    <div class = "home-container"> 
    <Navbar/>

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src= {AboutBackground} alt="" />
        </div>
        
        <div className="home-text-section">
          <h1 className="primary-heading" style={{position:'absolute',left:700}}>
          About Me
          </h1>
          <p className="primary-text" style={{position:'absolute',left:600,top:80, }}>
          {' \u00BA I am a senior attending Stetson University on the path to obtaining my Bachelors in Computer Science'}
          </p>
          <p className="primary-text" style={{position:'absolute',left:600,top:230, }}>
          {' \u00BA I enjoy software development and finding new ways to experiment and learn'}
          </p>
        </div>

      <div className="home-image-container" style={{position:'absolute',right:700}}>
        <img src={Stetson} alt="" />
      </div>

      </div>
      
    </div>
  )
}

export default About