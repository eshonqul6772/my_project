import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

import 'react-toggle/style.css'

import Container from '@/components/Container';

import Logo from '@/assets/images/logo.png';

import './Header.scss';

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const routes = [
    { title: 'About', path: '/about' },
    { title: 'Resume', path: '/resume' },
    { title: 'Services', path: '/services' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header className='header'>
      <Container>
        <div className='header__info'>
          <Link to='/'>
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
          </Link>

          <nav id='navbar'>
            <ul className={`menu-nav${navbarOpen ? ' show-menu' : ' menu'}`}>
              {routes.map(({ title, path }) => (
                <li key={path}>
                  <NavLink
                    onClick={() => setNavbarOpen(prev => !prev)}
                    className='nav-link'
                    to={path}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <a
            style={{ display: 'none' }}
            className='header__connect d-none d-lg-flex'
            href='tel:998971674748'
          >
            Connect me
          </a>

          <button className='toggle' onClick={() => setNavbarOpen(prev => !prev)}>
            {navbarOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
