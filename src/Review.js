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
        <div className="content"><h4>Inaugurazione del Nuovo Parco Tecnologico di Innovazione</h4>
          <div className={"di"}><p>Di Laura Bianchi</p></div>
          <p>
            Ieri mattina, la città ha festeggiato l'apertura del Parco Tecnologico di Innovazione,
            un hub dedicato alla ricerca e allo sviluppo nel campo delle energie rinnovabili. L'evento
            ha visto la partecipazione di numerosi leader del settore, oltre a rappresentanti locali
            e nazionali.
          </p></div>
      </div>
      <div className="item-review right">
        <div className={"ReviewTitle"}>
          <h4>Editoriali <i className="bi bi-chat-left-quote"></i> Commenti </h4>
        </div>
        <div className="text1Review">
          <div className="first-row-review">
            <div className="image-profile-review"><img src={"./photos/manreview.jpg"}/></div>
            <h3>Sono d'accordo con il giornalista</h3>
          </div>
          <div className="di"><p>Di Marco Gentili</p></div>
        </div>
        <div className="text1Review">
          <div className="first-row-review">
            <div className="image-profile-review"><img src={"./photos/manreview.jpg"}/></div>
            <h3>Non sono d'accordo</h3>
          </div>
          <div className="di"><p>Di Giulio Conti</p></div>
        </div>
        <div className="text1Review">
          <div className="first-row-review">
            <div className="image-profile-review"><img src={"./photos/manreview.jpg"}/></div>
            <h3>Sono d'accordo con il giornalista</h3>
          </div>
          <div className="di"><p>Di Marco Gentili</p></div>
        </div>
      </div>
    </div>

  )
}

export default review;
