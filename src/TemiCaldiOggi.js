import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TemiCaldiCSS from'./TemiCaldiOggi.css';
function TemiCaldiOggi(){
  return(
    <span className={"table-nav"}>
      <div className="hot-topics">
        <h2>Temi caldi di oggi:</h2>
          <div className="topics">
          <a href="#">TOTI</a>
          <a href="#">ASTRAZENECA</a>
          <a href="#">BOLZANO</a>
          <a href="#">EUROVISION 2024</a>
          <a href="#">UCRAINA-RUSSIA</a>
          <a href="#">ISRAELE-HAMAS</a>

          </div>
      </div>
    </span>
  )
}

export default TemiCaldiOggi;
