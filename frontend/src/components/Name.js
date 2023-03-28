import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Name.css'

const Name = () => {
  return (
    <div className="intro">
        <div className="left">
            <div className="left-l">
                <Avatar sizes='medium'>H</Avatar>
            </div>
            <div className="left-r">
                <p>Hello,</p>
                <h6>Nikhil Kumar Sahu </h6>
                <p>nikhil1312@gmail.com</p>
            </div>
        </div>
        <div className="right">
            <span style={{color:'#fff'}}> 0 followers</span>
        </div>
        
    </div>
  )
}

export default Name