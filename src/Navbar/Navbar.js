import React, {useEffect, useState} from 'react';
import SubNavbarcss from './Navbar.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const [text, setText] = useState('Meteo: Firenze 15');
  const [icon, setIcon] = useState('bi bi-cloud-drizzle-fill');
  const [showIcon, setShowIcon] = useState(true);
  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 100) {
      setText('CORRIERE DELLA SERA');
      setIcon('bi bi-cloud-drizzle-fill');
      setShowIcon(false);
    } else {
      setText('Meteo: Firenze 15');
      setIcon('bi bi-cloud-drizzle-fill');
      setShowIcon(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className="navbar navbar-dark fixed-top">
      <div className="container1menu">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          <a className={"sezione"} href={"#"}>Sezioni</a>
        </button>
        <div className={"CorriereTitle"}><h1>Corriere della Sera</h1>
          <div className={"lastupdate"}><h2>Aggiornato alle 21:33 </h2></div>
        </div>

        <div className="ms-auto">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
              Edizioni Locali
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Lorem Ipsum</a></li>
              <li><a className="dropdown-item" href="#">Lorem Ipsum</a></li>
              <li><a className="dropdown-item" href="#">Lorem Ipsum</a></li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
              Servizi
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Lorem Ipsum</a></li>
              <li><a className="dropdown-item" href="#">Lorem Ipsum</a></li>
              <li><a className="dropdown-item" href="#">Lorem Ipsum</a></li>
            </ul>
          </div>

        </div>

        <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar"
             aria-labelledby="offcanvasDarkNavbarLabel">
          <nav className="navbar">
            <div className="container-fluid text-center navbar-centered">
              <button type="button" className="btn-close" aria-label="Close" data-bs-dismiss="offcanvas"></button>
              <h3 className="titoloSub"> Corriere della sera</h3>
            </div>
          </nav>
          <div className="input-group mt-3">
            <input className="form-control" type="search" placeholder="Cerca in Corriere" aria-label="Search"/>
            <span className="input-group-text">
              <i className="fa fa-search"></i>
            </span>
          </div>
          <div className="container-popolari">
            <div className="title-popolari">Più popolari</div>
            <div className="columns">
              <div className="column">
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
              </div>
              <div className="column">
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
              </div>
            </div>
          </div>
          <hr/>
          <div className="container-inevidenza">
            <div className="title-inevidenza">In evidenza</div>
            <div className="columns">
              <div className="column">
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
              </div>
              <div className="column">
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
                <a href="#" className="link">Lorem Ipsum</a>
              </div>
            </div>
          </div>
          <nav className="sub-navbar">
            <ul className="nav-list">
              <li className="nav-item">Podcast <span className="icona">></span></li>
              <li className="nav-item">Dizionari <span className="icona">></span></li>

            </ul>
          </nav>
        </div>
      </div>
      <div className={"meteo-firenze"}><h1>{text}{showIcon && <i className={icon}> </i>} </h1></div>
      <div className="button-group"> {/* Aggiunta del contenitore per i bottoni */}
        <button className="subscribe-button"><i className="bi bi-brightness-low-fill"></i>ABBONATI</button>
        <a href={"access-button"} className={"access-button"}><i class="bi bi-person-circle"></i>Accedi</a>
      </div>
    </nav>
  );
}


export default Navbar;
