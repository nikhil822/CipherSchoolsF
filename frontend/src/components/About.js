import React from 'react'
import './About.css'
import { Button } from '@mui/material'

const About = () => {
  return (
    <div className='aboutme'>
        <div className='top'>
            <div className='left1'><h5><strong>ABOUT ME</strong></h5></div>
            <div className='right1'>
            <Button size='small' variant="contained" sx={{ color: '#fff', backgroundColor: '#f3912e', ':hover':{bgcolor:'#f3912e', opacity:0.75} }}
>EDIT</Button>
            </div>
        </div>
        <div className='bottom'>
            <textarea className='textarea' name="" id="" cols="100" rows="10" placeholder='Add something...'></textarea>
        </div>

    </div>
  )
}

export default About