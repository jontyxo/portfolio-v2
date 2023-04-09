import React, { useState } from 'react'
import { Link, Element } from 'react-scroll';
import "./topbar.css";

const Topbar = () => {
    const [topbar,setTopbar]=useState(false);
    const changeTopbar=()=>{
        if(window.scrollY>10){
            setTopbar(true);
            
        } else{
            setTopbar(false);
        
        }
    }
    window.addEventListener('scroll', changeTopbar)
  return (
    <div className={topbar?"topHead change":"topHead"}>
    <span style={{"align-self":"center"}}>joyesh.dev</span>
    <li className="menuList">
    <Link className={topbar?"menuChild change":"menuChild"}
  activeClass="active"
  to="home"
  spy={true}
  smooth={true}
  offset={-50}
  duration={300}
>
  HOME
</Link>
<Link className={topbar?"menuChild change":"menuChild"}
  activeClass="active"
  to="about"
  spy={true}
  smooth={true}
  offset={-50}
  duration={300}
>
  ABOUT
</Link>
<Link className={topbar?"menuChild change":"menuChild"}
  activeClass="active"
  to="projects"
  spy={true}
  smooth={true}
  offset={-50}
  duration={300}
>
  PROJECTS
</Link>
<Link className={topbar?"menuChild change":"menuChild"}
  activeClass="active"
  to="contact"
  spy={true}
  smooth={true}
  offset={-50}
  duration={300}
>
  CONTACT
</Link>
<Link>MY RESUME</Link>
       
    </li>
</div>
  )
}

export default Topbar