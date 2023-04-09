import React from 'react'
import "./hero.css"
import avatar from "../../images/avatar-png.png"

const Hero = () => {
   
  return (
    <div className="heroContainer">
       
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