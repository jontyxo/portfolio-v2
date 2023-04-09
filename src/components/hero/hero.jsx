import React, { useState } from 'react'
import "./hero.css"
import avatar from "../../images/avatar-png.png"

const Hero = () => {
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
    <div className="heroContainer">
        <div className={topbar?"topHead active":"topHead"}>
            <span>joyesh.dev</span>
            <li className="menuList">
                <ul>HOME</ul>
                <ul>ABOUT</ul>
                <ul>WORK</ul>
                <ul>CONTACT</ul>
                <ul>MY RESUME</ul>

            </li>
        </div>
        <div className="heroContent">
            <div className="heroInfo">
            <p className="heroP">

                <span className="heroInfoHi">Hi, I am</span>
                <span className="heroInfoName">JOYESH WADHWA</span>
            </p>
                <span className="heroInfoIntro">A passionate & ecstatic Web Developer,<br />
with a knack for web creations.</span>
            </div>
            <div className="heroRight">

            <div className="heroS" tabindex="0">
            <span className='avatarSpan'>This is not the real me</span>
                <img src={avatar} className='avatar' />
            </div>
        </div>
            </div>
    </div>
  )
}

export default Hero