import React from 'react'
import About from './About'
import Web from './Web'
import Edu from './Edu'
import { Divider } from '@mui/material'

const Body = () => {
  return (
    <div style={{backgroundColor:'rgba(0, 0, 0, 0.87)', color:'#fff'}}>
        <About />
        <Divider sx={{ bgcolor: "#9e9e9e" }} variant='middle' />
        <Web />
        <Divider sx={{ bgcolor: "#9e9e9e" }} variant='middle' />
        <Edu />
        <Divider sx={{ bgcolor: "#9e9e9e" }} variant='middle' />
    </div>
  )
}

export default Body