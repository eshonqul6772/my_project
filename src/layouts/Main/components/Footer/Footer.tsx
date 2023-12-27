import React from 'react';

import * as Icons from '@/components/Icons';

import Container from '@/components/Container';

import Logo from '@/assets/images/logo.png';

import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className='footer '>
      <Container>
        <div className='footer__wrapper'>
          <div>
            <img
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '2px solid #ffbb2c',
              }}
              src={Logo}
              alt='logo'
            />
          </div>

          <ul className='sicel'>
            <li>
              <a href=''>
                <Icons.Github />
              </a>
            </li>

            <li>
              <a href=''>
                <Icons.Github />
              </a>
            </li>

            <li>
              <a href=''>
                <Icons.Github />
              </a>
            </li>

            <li>
              <a href=''>
                <Icons.Github />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
