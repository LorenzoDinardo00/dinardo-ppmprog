import React from 'react';
import VideoDelGiornoCSS from './VideoDelGiorno.css';

function VideoDelGiorno() {
  const handleMouseEnter = (event) => {
    event.target.play();
  }

  const handleMouseLeave = (event) => {
    event.target.pause();
  }
  const handleClick = (event) => {
    window.open("/Video/videoExample.mp4", "_blank");
  }
  return (
    <div className="VideoDelGiorno">
      <div className="container">
        <h2>CORRIERE TV - I video del giorno</h2>
        <div className="scroll-container">
          <div className="news-item">
            <video  onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                    muted>
              <source src="/Video/videoExample.mp4" type="video/mp4"/>
            </video>
            <div className="text">
              <a href={"/Video/videoExample.mp4"}><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit </h3> </a>
            </div>
          </div>
          <div className="news-item">
            <video onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                   onClick={handleClick}
                   muted>
              <source src="/Video/videoExample.mp4" type="video/mp4" />
            </video>
            <div className="text">
              <a href={"/Video/videoExample.mp4"}><h3>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h3></a>
            </div>
          </div>
          <div className="news-item">
            <video onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                   onClick={handleClick}
                   muted>
              <source src="/Video/videoExample.mp4" type="video/mp4"/>
            </video>
            <div className="text">
              <a href={"/Video/videoExample.mp4"}><h3>Sunt in culpa qui officia deserunt mollit anim id est laborum.</h3></a>
            </div>
          </div>
          <div className="news-item">
            <video onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
                   onClick={handleClick}
                   muted>
              <source src="/Video/videoExample.mp4" type="video/mp4"/>
            </video>
            <div className="text">
              <a href={"/Video/videoExample.mp4"}><h3>Sed quia non numquam eius modi tempora.</h3></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDelGiorno;




