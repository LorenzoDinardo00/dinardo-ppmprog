import React from 'react';
import Head from './Head.js';
import Navbar from './Navbar/Navbar.js';
import TitleLogo from './TitleLogo.js';
import TemiCaldiOggi from './TemiCaldiOggi.js';
import VideoDelGiorno from "./VideoDelGiorno.js";
import News from './News.js';
function App() {
  return (
    <div className="TotalPage">
    <Head />
    <Navbar />
    <TitleLogo />
    <TemiCaldiOggi />
    <VideoDelGiorno />
    <News />
    </div>
);
}

export default App;
