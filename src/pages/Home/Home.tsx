import React, { useEffect } from 'react';
import Snowflakes from 'magic-snowflakes';
import { FaTwitter, FaFacebookF } from 'react-icons/fa6';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';


import meImg from '@/assets/images/me.jpg'

import cls from './Home.module.scss';

const snowflakes = new Snowflakes();

const Home = () => {
  
  useEffect(() => {
    snowflakes.start();
  }, []);
  
  return (
      <div className={cls.wrapper}>
        <div><h1>Eshonqul Abdulazizov </h1>
          <p>I am Frontend programmer from Uzbekistan</p>
          <div className={cls.socialLinks}>
            <a
              className={cls.link}
              href="https://www.twitter.com/eshonqul74"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              className={cls.link}
              href="https://www.facebook.com/Eshonqul"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              className={cls.link}
              href="https://www.instagram.com/maxmadalivich_"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className={cls.link}
              href="https://www.linkedin.com/in/eshonqul-abdulazizov-947230244/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
          
        </div>
          <div>
            <img src={meImg} width='800' height='450' alt='me-img'/>
          </div>
      </div>
  );
};

export default Home;
