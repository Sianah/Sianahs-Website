import React from 'react'
import { BSFillPlayCircleFull } from 'react-icons/bs'
import i4software from "../Assets/i4software.png"
import SuperSaver from "../Assets/savvysaver.png"
import SianahSmall from "../Assets/sianahsmall.png"
import StudyBuddy from "../Assets/studdybuddy.png"

const Projects = () => {
    const projectData = [
        {
            image: i4software,
            title: "i4software intern profiles",
            text: "I helped make the profile pages of each of everyone involved in my internship with i4software"
        },
        {
            image: SuperSaver,
            title: "SuperSaver",
            text: "I helped develop a web application alongside a group of talented individuals known as SavvySaver to help users manage their budgeting habits"
        },
        {
            image: SianahSmall,
            title: "SianahSmall.com",
            text: "I fully developed this web application on my own to portray my craft for others to see :)"
        },
        {
            image: StudyBuddy,
            title: "StudyBuddy",
            text: "I helped develop a mobile application alongside a group of talented individuals known as StudyBuddy to help users connect with others to form study groups for their common classes"
        },
    ]
  return (
    <div className="about-section-container">
        
    </div>
  )
}

export default Projects