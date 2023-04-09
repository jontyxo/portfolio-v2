import React from 'react'
import "./Footer.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="Footer">

    <div > 
    <a href="https://twitter.com/JoyeshW" target="_blank">

  <TwitterIcon style={{margin:"0rem 1rem 1rem 0rem",cursor: "pointer" ,color:"white"}} />
    </a>
    <a href="https://www.linkedin.com/in/joyesh-wadhwa-383816177/" target="_blank">

  <LinkedInIcon style={{margin:"0rem 1rem 1rem 0rem",cursor: "pointer",color:"white"}}/>
    </a>
    <a href="https://github.com/jontyxo" target="_blank">

  <GitHubIcon style={{margin:"0rem 1rem 1rem 0rem",cursor: "pointer",color:"white"}}/>
    </a>
    </div>
    <p className="footerp">Created By Joyesh Wadhwa @{currentYear}</p>
    </div>
  )
}

export default Footer