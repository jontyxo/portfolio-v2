import React, { useState } from 'react'
import "./about.css"

const About = () => {
  const [aboutme,setAboutme]=useState(false);
  const [aboutP,setAboutp]=useState(false);

  const aboutMeEffect=()=>{
    if(window.scrollY>250){
      setAboutme(true);
      setAboutp(true);
      
  } 
}
window.addEventListener('scroll', aboutMeEffect)
  return (

    <div className="about">
      <div className="aboutInfo">
      <div className="aboutMeEffect">

        <span className={aboutme?"aboutMe aboutVisible": "aboutMe"}>About Me</span>
        <span className={aboutme?"aboutMe aboutVisible": "aboutMe"}>About Me</span>
      </div>

        <p className={aboutP?"aboutInfoP aboutpvisible":"aboutInfoP"}>

        As a fresher with expertise in both frontend and backend technologies, I am excited to showcase my skills and knowledge in the field of web development through my portfolio site. With a strong foundation in React.js, I am passionate about creating user-friendly and responsive web applications that deliver seamless user experiences.<br />

Having an understanding of backend technologies, I am well-versed in building robust server-side applications and integrating them with the frontend. My ability to work with databases, RESTful APIs, and server-side frameworks allows me to design efficient and scalable web solutions.</p>
      </div>
      <div>
        <img className="img" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcToCSfFnogcZiJXJeaDbBPbeMe2zJhiOIJ6cH3iKlkg1U2ApF1X" />
      </div>
    </div>
  )
}

export default About