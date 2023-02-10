import React from 'react';
import '../../hojas de estilo/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {



  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to='/culture'>Cultura</Link>
        </li>
        <li>
          <Link to='/culture'>Tecnologia</Link>
        </li>
        <li>
          <a ><Link to='/culture'>Memes</Link></a>
        </li>
        <li>
          <Link to='/culture'>Deportes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
