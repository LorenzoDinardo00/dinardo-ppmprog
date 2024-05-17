import React from 'react';
import ReviewCSS from './Review.css';
function review(){
  return (
    <div className="review-grid">
      <div className="item-review left-top">
        <div className={"EconomyTitle"}>
          <h1 className="logoEconomy">L'Economia</h1>
        </div>
      </div>
      <div className="item-review left-bottom">
        <div className="image-wrapper">
          <img src={"photos/imgNotizia2.jpg"} alt="Descrizione immagine" className="img-news"/>
        </div>
        <div className="content"><h4>The standard Lorem Ipsum passage, used since the 1500s</h4>
          <div className={"di"}><p>Di Lorem Ipsum</p></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p></div>
      </div>
      <div className="item-review right">
        <div className={"ReviewTitle"}>
          <h4>Editoriali <i className="bi bi-chat-left-quote"></i> Commenti </h4>
        </div>
        <div className="text1Review">
          <div className="first-row-review">
            <div className="image-profile-review"><img src={"./photos/manreview.jpg"}/></div>
            <h3>Nemo enim ipsam voluptatem</h3>
          </div>
          <div className="di"><p>Di Lorem Ipsum</p></div>
        </div>
        <div className="text1Review">
          <div className="first-row-review">
            <div className="image-profile-review"><img src={"./photos/manreview.jpg"}/></div>
            <h3>nisi ut aliquid ex ea commodi consequatur?</h3>
          </div>
          <div className="di"><p>Di Lorem Ipsum</p></div>
        </div>
        <div className="text1Review">
          <div className="first-row-review">
            <div className="image-profile-review"><img src={"./photos/manreview.jpg"}/></div>
            <h3>Et harum quidem rerum facilis est et expedita distinctio.</h3>
          </div>
          <div className="di"><p>Di Lorem Ipsum</p></div>
        </div>
      </div>
    </div>

  )
}

export default review;
