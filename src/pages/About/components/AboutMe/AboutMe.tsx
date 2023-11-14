import React from 'react';

import Container from 'components/Container';

import meImg from 'assets/images/me.jpg';

import './AboutMe.scss';

const AboutMe: React.FC = () => {
  return (
    <Container>
      <div className='pt-3'>
        <div className='section-title'>
          <h2>About</h2>
          <p>Learn more about me</p>
        </div>

        <div className='row'>
          <div className='col-lg-4' data-aos='fade-right'>
            <img src='https://picsum.photos/440/440?image=0' className='img-fluid' alt='' />
          </div>
          <div className='col-lg-8 pt-4 pt-lg-0 content' data-aos='fade-left'>
            <h3>React js deweloper</h3>
            <p className='fst-italic text-dark'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='row'>
              <div className='col-lg-6'>
                <ul>
                  <li>
                    <i className='bi bi-chevron-right'></i> <strong>Birthday:</strong>
                    <span>8 January 2003</span>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right'></i> <strong>Website:</strong>
                    <span>www.example.com</span>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right'></i> <strong>Phone:</strong>
                    <span>+998 97 167 47 48</span>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right'></i> <strong>City:</strong>
                    <span>Tashkent, UZB</span>
                  </li>
                </ul>
              </div>
              <div className='col-lg-6'>
                <ul>
                  <li>
                    <i className='bi bi-chevron-right'></i> <strong>Age:</strong> <span>20</span>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right'></i> <strong>Degree:</strong>{' '}
                    <span>junior</span>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right'></i> <strong>PhEmailone:</strong>
                    <span>aeshonqul@gmail.con</span>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right'></i> <strong>Freelance:</strong>{' '}
                    <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className='text-dark fs-5  '>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt
              adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
              repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
