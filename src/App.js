import React from 'react';
import Head from './Head.js';
import Navbar from './Navbar/Navbar.js';
import TitleLogo from './TitleLogo.js';
import TemiCaldiOggi from './TemiCaldiOggi.js';
import VideoDelGiorno from "./VideoDelGiorno.js";
import News from './News.js';
import Review from './Review.js';
import FinalButton from "./FinalButton";
import Footer from './Footer.js';
import EdizioniLocali from "./EdizioniLocali";
import Iblogdelcorriere from "./Iblogdelcorriere";
function App() {
  return (
    <div className="TotalPage">
    <Head />
    <Navbar />
    <TitleLogo />
    <TemiCaldiOggi />
    <VideoDelGiorno />
    <News />
    <Review />
      <EdizioniLocali />
      <Iblogdelcorriere />
    <FinalButton />
      <Footer />

    </div>
);
}

export default App;
