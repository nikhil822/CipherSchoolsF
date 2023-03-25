import React from 'react'
import About from './About'
import Web from './Web'
import { Divider } from '@mui/material'

const Body = () => {
  return (
    <div style={{backgroundColor:'rgba(0, 0, 0, 0.87)', color:'#fff'}}>
        <About />
        <Divider variant='middle' />
        <Web />
    </div>
  )
}

export default Body