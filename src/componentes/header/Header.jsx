import React from 'react';
import logorpa from '../../imagenes/header/rpa-logo.png';
import adsnews from '../../imagenes/header/ads-news-01.jpg';
import  '../../hojas de estilo/header.css'
const Header = () => {
  return (
    <div className='header-contenedor'>
      <div >
        <img src={logorpa} className='logo-rpa' alt='' />
      </div>

      <div>
        <img src={adsnews} className='ads-news' alt='' />
      </div>
    </div>
  );
};

export default Header;
