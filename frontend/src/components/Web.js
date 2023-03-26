import React from 'react'
import './Web.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import { Button } from '@mui/material';

const Web = () => {
  return (
    <div className='aboutme'>
        <div className="top1">
            <h5><strong>ON THE WEB</strong></h5>
            <Button size='small' variant="contained" sx={{ color: '#fff', backgroundColor: '#f3912e', ':hover':{bgcolor:'#f3912e', opacity:0.75} }}
>EDIT</Button>
        </div>
        <div className="btm2">
            <div className="one">
                <span>Linkedin</span>
                <div className="social">
                    <LinkedInIcon />
                    <input type="text" placeholder='Linkeldin' />
                </div>
            </div>
            <div className="one">
                <span>Github</span>
                <div className="social">
                    <GitHubIcon />
                    <input type="text" placeholder='Github' />
                </div>
            </div>
            <div className="one">
                <span>Facebook</span>
                <div className="social">
                    <FacebookIcon />
                    <input type="text" placeholder='Facebook' />
                </div>
            </div>
            <div className="one">
                <span>Twitter</span>
                <div className="social">
                    <TwitterIcon />
                    <input type="text" placeholder='Twitter' />
                </div>
            </div>
            <div className="one">
                <span>Instagram</span>
                <div className="social">
                    <InstagramIcon />
                    <input type="text" placeholder='Instagram' />
                </div>
            </div>
            <div className="one">
                <span>Website</span>
                <div className="social">
                    <LanguageIcon />
                    <input type="text" placeholder='Website' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Web