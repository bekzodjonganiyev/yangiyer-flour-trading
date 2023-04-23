import React from 'react'
import videoBg from '../../assets/video/videoBg.mp4'
import './VideoBg.css'
const BannerVideo = () => {
  return (
    <div className='videoBg'>
        <div className="videoOverlay"></div>
        <video src={videoBg} autoPlay loop muted />
        
    </div>
  )
}

export default BannerVideo