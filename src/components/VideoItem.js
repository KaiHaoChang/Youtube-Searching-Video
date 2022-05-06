import './VideoItem.css'
import React from 'react'


const VideoItem = ({video, onVideoSelect}) => { 
  let videoSnnipet = video.snippet
  return (
    <div onClick={ () => {onVideoSelect(video)} } className='video-item item'>
      <img className='ui image' src={videoSnnipet.thumbnails.medium.url} alt={videoSnnipet.title}/>
      <div className='content'>
        <div className="header">{videoSnnipet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem