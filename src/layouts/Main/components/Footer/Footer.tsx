import React from 'react';

import * as Icons from '@/components/Icons';

import Container from '@/components/Container';

import Logo from '@/assets/images/logo.png';

import cls from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className='footer py-4 bg-white mt-3'>
      <Container>
        <div className='d-flex align-items-center justify-content-between'>
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

          <ul className={cls.sicel}>
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
