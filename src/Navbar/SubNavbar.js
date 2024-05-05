import React from 'react';
import SubNavbarcss from './SubNavbar.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';


function SubNavbar() {
  return (
    <nav className="navbar navbar-dark fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar"
             aria-labelledby="offcanvasDarkNavbarLabel">
          <nav className="navbar">
            <div className="container-fluid text-center navbar-centered">
              <button type="button" className="btn-close" disabled aria-label="Close"></button>
              <h3 className="titoloSub"> Corriere della sera</h3>
            </div>
          </nav>
          <form className="searchbar" role="search">
          <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Cerca in Corriere" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </form>
          <div className="container-popolari">
            <div className="title-popolari">Più popolari</div>
            <div className="columns">
              <div className="column">
                <a href="#" className="link">UCRAINA RUSSIA</a>
                <a href="#" className="link">ISRAELE</a>
                <a href="#" className="link">MELONI</a>
                <a href="#" className="link">BCE</a>
                <a href="#" className="link">SINNER</a>
                <a href="#" className="link">PRIMA PAGINA</a>
              </div>
              <div className="column">
                <a href="#" className="link">SERIE A</a>
                <a href="#" className="link">FORMULA 1</a>
                <a href="#" className="link">CINEMA</a>
                <a href="#" className="link">PODCAST DAILY</a>
                <a href="#" className="link">ELEZIONI</a>
                <a href="#" className="link">OROSCOPO FOX</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="container-inevidenza">
            <div className="title-inevidenza">In evidenza</div>
            <div className="columns">
              <div className="column">
                <a href="#" className="link">UCRAINA RUSSIA</a>
                <a href="#" className="link">ISRAELE</a>
                <a href="#" className="link">MELONI</a>
                <a href="#" className="link">BCE</a>
                <a href="#" className="link">SINNER</a>
                <a href="#" className="link">PRIMA PAGINA</a>
              </div>
              <div className="column">
                <a href="#" className="link">SERIE A</a>
                <a href="#" className="link">FORMULA 1</a>
                <a href="#" className="link">CINEMA</a>
                <a href="#" className="link">PODCAST DAILY</a>
                <a href="#" className="link">ELEZIONI</a>
                <a href="#" className="link">OROSCOPO FOX</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SubNavbar;
