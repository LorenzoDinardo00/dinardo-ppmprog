import React from 'react';
import FooterCSS from './Footer.css';
function Footer() {
  return (
    <div className="Footer">
      <footer>
        <h1 className={"FooterTitle"}>Corriere della Sera-replica</h1>
        <div className="footer-top">
          <a href="#">Abbonati a Corriere della Sera</a> |
          <a href="#">Gazzetta</a> |
          <a href="#">El Mundo</a> |
          <a href="#">Marca</a> |
          <a href="#">RCS Mediagroup</a> |
          <a href="#">Fondazione Corriere</a> |
          <a href="#">Fondazione Cutuli</a> |
          <a href="#">Quimamme</a> |
          <a href="#">OFFERTE CORRIERE STORE</a> |
          <a href="#">Buonpertutti</a>
        </div>
        <div className="footer-bottom">
          <a href="#">Codici Sconto</a> |
          <a href="#">Corso di Inglese - Francese</a>
          <p>Copyright 2024 © Lorenzo Dinardo Tutti i diritti sono riservati | Per la pubblicità: Lorenzo Dinardo Media
            OK - Direzione Pubblicità<br/>
           <br/>
      </p>
        </div>
      </footer>
    </div>
  );
}


export default Footer;
