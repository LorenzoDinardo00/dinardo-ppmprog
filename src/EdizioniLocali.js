import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './News.css';
import EdizioniLocaliCSS from './EdizioniLocali.css';

function EdizioniLocali(){
 return (
   <div className="EdizioniLocali">
     <div className="grid-container">

       <div className="item left-top">
         <h1>Edizione Locale 1 <i className="bi bi-caret-right"></i></h1>
       </div>
       <div className="item left-bottom">
         <div className="image-wrapper">

           <img src={"photos/imgNotizia2.jpg"} alt=""  className="img-news"/>

           </div>
         <div className="content"><h4>1914 translation by H. Rackham</h4>
           <div className={"di"}><p>Di Lorem Ipsum</p></div>
           <p>
             But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
             I will give you a complete account of the system, and expound the actual teachings of the great explorer of
             the truth, the master-builder of human happiness.
           </p>
         </div>

       </div>
       <div className="item right">
         <div className={"UpdateTitle"}><h4>IN AGGIORNAMENTO</h4></div>

         <div className="news-containerEL">
           <a href={""}>
             <img src={"photos/imgNotizia2.jpg"} alt="" className="img-news"/>
             <div className="text1TV">
               <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
               <div className="di"><p>Di Lorem Ipsum</p></div>
               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                 et
                 dolore magna aliqua. Ut enim ad minim veniam.</p>
             </div>
           </a>
            <a href={""}>
           <img src={"photos/imgNotizia2.jpg"} alt="" className="img-news"/>
           <div className="text1TV">
             <h3>De Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
             <div className="di"><p>Di Lorem Ipsum</p></div>
             <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
           </div>
            </a>
            <a href={""}>
           <img src={"photos/imgNotizia2.jpg"} alt="" className="img-news"/>
           <div className="text1TV">
             <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
             <div className="di"><p>Di Lorem Ipsum</p></div>
             <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua. Ut enim ad minim veniam.</p>
           </div>
            </a>
           <a href={""}>
           <img src={"photos/imgNotizia2.jpg"} alt="" className="img-news"/>
           <div className="text1TV">
             <h3>De Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
             <div className="di"><p>Di Lorem Ipsum</p></div>
             <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
           </div>
            </a>
         </div>

       </div>

       <div className="item news-integral">
         <a href={""}>
         <div className="news-integral-title">
           <h4>De Finibus Bonorum et Malorum", written by Cicero in 45 BC</h4>
         </div>
         <div className="di"><p>Di Lorem Ipsum</p></div>
         <div className="news-integral-image">
           <img src={"photos/imgNotizia3.jpg"} alt="" className="img-news"/>
         </div>
         </a>
       </div>
       <div className="item news-integral">
         <a href={""}>
         <div className="news-integral-title">
           <h4>De Finibus Bonorum et Malorum", written by Cicero in 45 BC</h4>
         </div>
         <div className="di"><p>Di Lorem Ipsum</p></div>
         <div className="news-integral-image">
           <img src={"photos/imgNotizia2.jpg"} alt="" className="img-news"/>
         </div>
         </a>

       </div>
     </div>
     <div className="grid-container">

       <div className="item left-top">
         <h1>Edizione Locale 2 <i className="bi bi-caret-right"></i></h1>
       </div>
       <div className="item left-bottom">

         <div className="image-wrapper">
           <img src={"photos/imgNotizia2.jpg"} alt="" className="img-news"/>
         </div>
         <div className="content"><h4>1914 translation by H. Rackham</h4>
           <div className={"di"}><p>Di Lorem Ipsum</p></div>
           <p>
             But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
             I will give you a complete account of the system, and expound the actual teachings of the great explorer of
             the truth, the master-builder of human happiness.
           </p>
         </div>

       </div>
       <div className="item right-n">
         <div className="podcast-invitation">
           <img src={"photos/podcast.jpg"} alt="Podcast" className="podcast-image"/>
           <button className="subscribe2-button">Iscriviti al Podcast</button>
         </div>
       </div>


     </div>

   </div>
 );
}

export default EdizioniLocali;
