import React from 'react'

import "./projects.css"
import Project from '../project/project'


const Projects = ({projects}) => {
  return (
    <div style={{ background:"#F2921D", padding:"2rem"}}>
<span className="projectHead">Projects</span>
    <div className='projects'>
    
      {projects.map((p)=>(
      <Project  project={p} />
    ))}
    </div>
    </div>
  )
}

export default Projects