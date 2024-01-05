import React from 'react';

import * as Grid from '@/components/Grid';
import Container from '@/components/Container';

import './AboutMe.scss';

const AboutMe: React.FC = () => {
  return (
    <Container>
      <div className='about-me' style={{ paddingTop: '15px' }}>
        <div className='section-title'>
          <h2>About</h2>
          <p>Learn more about me</p>
        </div>

        <Grid.Row gutter={[24, 24]}>
          <Grid.Col xs={8}>
            <img src='https://picsum.photos/440/440?image=0' className='img-fluid' alt='' />
          </Grid.Col>

          <Grid.Col xs={16}>
            <h3 className='about-title'>React js deweloper</h3>
            <i className='about-paragrft'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </i>
            <Grid.Row gutter={[24, 24]}>
              <Grid.Col xs={12}>
                <ul className='about__information-list'>
                  <li>
                    <strong>Birthday:</strong>
                    <span>8 January 2003</span>
                  </li>
                  <li>
                    <strong>Website:</strong>
                    <span>www.example.com</span>
                  </li>
                  <li>
                    <strong>Phone:</strong>
                    <span>+998 97 167 47 48</span>
                  </li>
                  <li>
                    <strong>City:</strong>
                    <span>Tashkent, UZB</span>
                  </li>
                </ul>
              </Grid.Col>
              <Grid.Col xs={12}>
                <ul className='about__information-list'>
                  <li>
                    <strong>Age:</strong> <span>20</span>
                  </li>
                  <li>
                    <strong>Degree:</strong>
                    <span>junior</span>
                  </li>
                  <li>
                    <strong>PhEmailone:</strong>
                    <span>aeshonqul@gmail.con</span>
                  </li>
                  <li>
                    <strong>Freelance:</strong>
                    <span>Available</span>
                  </li>
                </ul>
              </Grid.Col>
            </Grid.Row>
            <p className='description'>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt
              adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia
              repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
              repellendus omnis culpa magni laudantium dolores.
            </p>
          </Grid.Col>
        </Grid.Row>
      </div>
    </Container>
  );
};

export default AboutMe;
