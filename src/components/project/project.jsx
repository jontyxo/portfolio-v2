import React from 'react'
import "./project.css"


const Project = ({project}) => {


  return (
    <div className="project">
  
  <div className="leftDiv">
  <div className="imgDiv">

    <img className='projectImg' src={project.img} />
  </div>
    <span className="projectName">{project.name}</span>
  </div>
  <div className="rightDiv">{project.num}</div>

  </div>
  )
}

export default Project