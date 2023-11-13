import React, { useState } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import Container from 'components/Container';

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
      <Container>
        <div className='d-flex justify-content-between align-items-center'>
          <a className='d-flex align-items-center gap-2 fw-bold text-dark' href='#'>
            <img
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '2px solid #ffbb2c',
              }}
              src={Logo}
              alt=''
            />
            <span className='d-none d-md-flex'>
              Abdulazizov <br /> Eshonqul
            </span>
          </a>

          <nav id='navbar'>
            <ul className={`menu-nav${navbarOpen ? ' show-menu' : ' menu'}`}>
              {routes.map(({ title, path }) => (
                <li key={path}>
                  <a onClick={() => setNavbarOpen(prev => !prev)} className='nav-link' href={path}>
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
            {navbarOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
