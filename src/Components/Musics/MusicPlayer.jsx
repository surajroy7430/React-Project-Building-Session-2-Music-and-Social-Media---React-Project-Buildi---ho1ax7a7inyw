import { AppBar, Toolbar } from '@mui/material'
import React from 'react'

const MusicPlayer = () => {
  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ top: 'auto', bottom: 0 }} 
      className='musicPlayer'
    >
      <div className="musicTimer"></div>
      <div className='musicDetails'></div>
    </AppBar>
  )
}

export default MusicPlayer
