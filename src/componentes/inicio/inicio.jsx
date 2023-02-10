import React, { useState, useEffect } from 'react';
//import Header from '../header/Header';
//import Navbar from '../navbar/Navbar';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import VistaPreviaNoticia from '../vista_previa_noticia/VistaPreviaNoticia';

const API_KEY = 'f7c7be445787401ab815378dd443d132';
const inicio = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://newsapi.org/v2/everything?q=peru&from=2023-02-10&sortBy=popularity&apiKey=${API_KEY}`
      );
      const data = await result.json();
      console.log('articulos', data.articles);
      setNews(data.articles);
    };

    fetchData();
  }, []);

  return (
    <div className='inicio'>
      <div className='portada'>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2, 1200: 4 }}
        >
          <Masonry gutter='16px'>
            {news.map(function (articulo) {
              return (
                <VistaPreviaNoticia articulo={articulo}></VistaPreviaNoticia>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

// The number of columns change by resizing the window
export default inicio;
