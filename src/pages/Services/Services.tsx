import React from 'react';

import * as Grid from 'components/Grid';

import Container from 'components/Container';

import './Services.scss';

const Services: React.FC = () => {
  return (
    <section id='services' className='services'>
      <Container>
        <div className='section-title'>
          <h2>Services</h2>
          <p>My Services</p>
        </div>

        <Grid.Row gutter={[24, 24]}>
          <Grid.Col xs={24} md={12} lg={8}>
            <div className='icon-box'>
              <div className='icon'>
                <i className='bx bxl-dribbble'></i>
              </div>
              <h4>
                <a href=''>Lorem Ipsum</a>
              </h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </Grid.Col>

          <Grid.Col xs={24} md={12} lg={8}>
            <div className='icon-box'>
              <div className='icon'>
                <i className='bx bx-file'></i>
              </div>
              <h4>
                <a href=''>Sed ut perspiciatis</a>
              </h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </Grid.Col>

          <Grid.Col xs={24} md={12} lg={8}>
            <div className='icon-box'>
              <div className='icon'>
                <i className='bx bx-tachometer'></i>
              </div>
              <h4>
                <a href=''>Magni Dolores</a>
              </h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </Grid.Col>

          <Grid.Col xs={24} md={12} lg={8}>
            <div className='icon-box'>
              <div className='icon'>
                <i className='bx bx-world'></i>
              </div>
              <h4>
                <a href=''>Nemo Enim</a>
              </h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </Grid.Col>

          <Grid.Col xs={24} md={12} lg={8}>
            <div className='icon-box'>
              <div className='icon'>
                <i className='bx bx-slideshow'></i>
              </div>
              <h4>
                <a href=''>Dele cardo</a>
              </h4>
              <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
            </div>
          </Grid.Col>

          <Grid.Col xs={24} md={12} lg={8}>
            <div className='icon-box'>
              <div className='icon'>
                <i className='bx bx-arch'></i>
              </div>
              <h4>
                <a href=''>Divera don</a>
              </h4>
              <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
            </div>
          </Grid.Col>
        </Grid.Row>
      </Container>
    </section>
  );
};

export default Services;
