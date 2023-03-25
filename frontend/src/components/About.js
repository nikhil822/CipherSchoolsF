import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='aboutme'>
        <div className='top'>
            <div className='left1'><h5>ABOUT ME</h5></div>
            <div className='right1'><button>Edit</button></div>
        </div>
        <div className='bottom'>
            <textarea className='textarea' name="" id="" cols="100" rows="10" placeholder='Add something...'></textarea>
        </div>

    </div>
  )
}

export default About