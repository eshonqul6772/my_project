import React, { useState } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import Logo from 'assets/images/logo.png';

import './Header.scss';

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const routes = [
    { title: 'About', path: '#about' },
    { title: 'Resume', path: '#resume' },
    { title: 'Services', path: '#services' },
    { title: 'Portfolio', path: '#portfolio' },
    { title: 'Contact', path: '#contact' },
  ];

  return (
    <header className='py-3 header'>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <a className='d-flex align-items-center gap-2 fw-bold text-dark' href='#'>
            <img
              style={{ borderRadius: '50%', border: '2px solid #ffbb2c' }}
              src={Logo}
              width='50'
              height='50px'
              alt=''
            />
            Abdulazizov <br /> Eshonqul
          </a>

          <nav id='navbar'>
            <ul className={`menu-nav${navbarOpen ? ' show-menu' : ' menu'}`}>
              {routes.map(({ title, path }) => (
                <li key={path}>
                  <a className='nav-link' href={path}>
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a className='header__connect' href='tel:998971674748'>
            Connect me
          </a>

          <button className='toggle text-dark' onClick={() => setNavbarOpen(prev => !prev)}>
            {navbarOpen ? <CloseOutlined color='black' /> : <MenuOutlined color='black' />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
