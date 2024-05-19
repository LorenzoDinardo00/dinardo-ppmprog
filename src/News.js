import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './News.css';

function News() {
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
    <div className="grid-container">
      <div className="item left-top">
        <div className="image-wrapper">
          <img src={"photos/imgNotizia1.jpg"} alt="Descrizione immagine" className="img-news"/>
        </div>
        <div className="content"><h4>De Finibus Bonorum et Malorum", written by Cicero in 45 BC</h4>
          <div className={"di"}><p>Di Lorem Ipsum</p></div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p></div>
      </div>
      <div className="item left-bottom">
        <div className="image-wrapper">
          <img src={"photos/imgNotizia2.jpg"} alt="Descrizione immagine" className="img-news"/>
        </div>
        <div className="content"><h4>1914 translation by H. Rackham</h4>
          <div className={"di"}><p>Di Lorem Ipsum</p></div>
          <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
          </p></div>
      </div>
      <div className="item right">
        <div className={"CorriereTV"}><i className="bi bi-arrow-left-circle"></i><h4>Corriere TV</h4><i
          className="bi bi-arrow-right-circle"></i></div>
        <video onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               onClick={handleClick}
               muted>
          <source src="/Video/CorriereTV1.mp4" type="video/mp4"/>
        </video>
        <div className="text1TV">
          <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
          <div className="di"><p>Di Lorem Ipsum</p></div>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <video onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               onClick={handleClick}
               muted>
          <source src="/Video/CorriereTV2.mp4" type="video/mp4"/>
        </video>
        <div className="text1TV">
          <h3>De Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
          <div className="di"><p>Di Lorem Ipsum</p></div>
          <p>  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        </div>

      </div>
      <div className="item news-integral">
        <div className="news-integral-title">
          <h4>De Finibus Bonorum et Malorum, written by Cicero in 45 BC</h4>
        </div>
        <div className="di"><p>Di Lorem Ipsum</p></div>
        <div className="news-integral-image">
          <img src={"photos/imgNotizia3.jpg"} alt="Parco Tecnologico" className="img-news"/>
        </div>
      </div>
    </div>
  );
}

export default News;
