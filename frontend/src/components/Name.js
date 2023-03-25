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
                <p>Nikhil </p>
                <p>emailid</p>
            </div>
        </div>
        <div className="right">
            <span> 0 followers</span>
        </div>
        
    </div>
  )
}

export default Name