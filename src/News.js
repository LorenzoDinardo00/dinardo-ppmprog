import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './News.css'; // Assicurati che il percorso sia corretto

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
        <div className="content"><h4>Arresto Sospettato per una Serie di Furti in Zona Centrale</h4>
          <div className={"di"}><p>Di Pierpaolo Cosentin</p></div>
          <p>
            Nella tarda serata di ieri, le forze dell'ordine hanno arrestato un individuo sospettato
            di numerosi furti in zona centrale. L'arresto segue una serie di indagini durate mesi.
          </p></div>
      </div>
      <div className="item left-bottom">
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
          <h3>TechAdvance Convoca una Riunione Strategica d'Emergenza</h3>
          <div className="di"><p>Di Marco Gentili</p></div>
          <p> La TechAdvance ha annunciato una riunione d'emergenza per discutere di recenti sfide di mercato.</p>
        </div>
        <video onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
               onClick={handleClick}
               muted>
          <source src="/Video/CorriereTV2.mp4" type="video/mp4"/>
        </video>
        <div className="text1TV">
          <h3>Nuova Scoperta Rivoluzionaria nella Cura del Diabete da parte di MedFuture</h3>
          <div className="di"><p>Di Giulio Conti</p></div>
          <p> MedFuture, una startup biotecnologica emergente, ha annunciato oggi di aver fatto una svolta significativa
            nella cura del diabete.</p>
        </div>

      </div>
      <div className="item news-integral">
        <div className="news-integral-title">
          <h4>GreenTech Innovations Lancia il Primo Drone Ecologico Alimentato ad Energia Solare</h4>
        </div>
        <div className="di"><p>Di Giulio Conti</p></div>
        <div className="news-integral-image">
          <img src={"photos/imgNotizia3.jpg"} alt="Parco Tecnologico" className="img-news"/>
        </div>
      </div>
    </div>
  );
}

export default News;
