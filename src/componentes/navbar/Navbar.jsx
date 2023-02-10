import React from 'react';
import '../../hojas de estilo/navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  let eventButton = () => {
    setOpen(!open);
  };

  return (
    <nav className='navbar'>
      <button
        className='menu'
        onClick={() => {
          eventButton();
        }}
      >
        <i class='fa-solid fa-bars'></i>
      </button>
      {open ? (
        <ul className='navbar-vertical'>
          <li>
            <Link to='/culture'>Cultura</Link>
          </li>
          <li>
            <Link to='/culture'>Tecnologia</Link>
          </li>
          <li>
            <a>
              <Link to='/culture'>Memes</Link>
            </a>
          </li>
          <li>
            <Link to='/culture'>Deportes</Link>
          </li>
        </ul>
      ) : null}
      <ul className='navbar-horizontal'>
        <li>
          <Link to='/culture'>Cultura</Link>
        </li>
        <li>
          <Link to='/culture'>Tecnologia</Link>
        </li>
        <li>
          <a>
            <Link to='/culture'>Memes</Link>
          </a>
        </li>
        <li>
          <Link to='/culture'>Deportes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
