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
            title: "Sianah.Small.com",
            text: "I fully developed this web application on my own to portray my craft for others to see :)"
        },
        {
            image: StudyBuddy,
            title: "StudyBuddy",
            text: "I helped develop a mobile application alongside a group of talented individuals known as StudyBuddy to help users connect with others to form study groups for their common classes"
        },
    ]
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <h1 className="primary-heading" style={{color: '#F9C7AA'}}>
                My Projects
            </h1>
            <p className="primary-text">
                Here is a list of all the projects I have made so far 
            </p>
        </div>

        <div className="work-section-bottom">
            {
                projectData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>
                            {data.title}
                        </h2>
                        <p>
                            {data.text}
                        </p>
                    </div>
                )
            )
        }
    </div>

    </div>
  )
}

export default Projects