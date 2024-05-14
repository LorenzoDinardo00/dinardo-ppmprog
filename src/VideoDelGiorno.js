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
              <a href={"/Video/videoExample.mp4"}><h3>Meloni all’incontro “La Costituzione di tutti. Dialogo su premierato” </h3> </a>
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
              <a href={"/Video/videoExample.mp4"}><h3>Fiamme nello stabilimento a Bolzano</h3></a>
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
              <a href={"/Video/videoExample.mp4"}><h3>I 48 milioni di euro falsi sequestrati in una stamperia a
                Napoli</h3></a>
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
              <a href={"/Video/videoExample.mp4"}><h3>Ecco che succede quando passa Jannik»: fan in delirio</h3></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDelGiorno;




