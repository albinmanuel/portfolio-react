import React from 'react'
import '../Intro/Intro.css'
import res from '../Images/Resume_Albin_Manuel.pdf'

function Intro() {
  return (
    <div>
        <div className="home-container">
      <h1>Hello, I'm Albin Manuel</h1>
      <h3>MEARN Stack Developer</h3>
      <a href={res} download>
        <button className="resume-btn">Download Resume</button>
      </a>
    </div>
    </div>
  )
}

export default Intro