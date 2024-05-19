import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import IblogdelcorriereCSS from './Iblogdelcorriere.css';
import { useState } from 'react';
function Iblogdelcorriere(){
  const [blogs, setBlogs] = useState([
    { title: 'LOREM IPSUM', author: 'di Lorem Ipsum' },
    { title: 'LOREM IPSUM', author: 'di Lorem Ipsum' },
    { title: 'LOREM IPSUM', author: 'di Lorem Ipsum' },
    { title: 'LOREM IPSUM', author: 'di Lorem Ipsum' },
    { title: 'LOREM IPSUM', author: 'di Lorem Ipsum' },
    { title: 'LOREM IPSUM', author: 'di Lorem Ipsum' },
    { title: 'LOREM IPSUM', author: 'di Lorem Ipsum' },
    { title: 'LOREM IPSUM', author: 'di Lorem Ipsum' }
  ]);

  const [showButton, setShowButton] = useState(true);

  const handleShowMore = () => {
    const newBlogs = [...blogs];
    for (let i = 0; i < 8; i++) {
      newBlogs.push({ title: 'LOREM IPSUM', author: 'di Lorem Ipsum' });
    }
    setBlogs(newBlogs);
    setShowButton(false); // Nascondi il pulsante dopo il clic
  };

  return (
    <div className="blog-container">
      <h2>I BLOG DEL CORRIERE</h2>
      <div className="blogs">
        {blogs.map((blog, index) => (
          <div className="blog" key={index}>
            <h3>{blog.title}</h3>
            <p><a href="#">{blog.author}</a></p>
          </div>
        ))}
      </div>
      {showButton && <button id="show-more-btn" onClick={handleShowMore}>Vedi tutti</button>}
    </div>
  );
}

export default Iblogdelcorriere;
