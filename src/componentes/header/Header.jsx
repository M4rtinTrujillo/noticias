import React from 'react';
import logorpa from '../../imagenes/header/rpa-logo.png';
import adsnews from '../../imagenes/header/ads-news-01.jpg';
import '../../hojas de estilo/header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header-contenedor'>
      <div>
        <Link to='/inicio'>
          <img src={logorpa} cl assName='logo-rpa' alt='' />
        </Link>
      </div>

      <div>
        <img src={adsnews} className='ads-news' alt='' />
      </div>
    </div>
  );
};

export default Header;
