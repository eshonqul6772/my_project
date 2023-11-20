import React from 'react';

import * as Grid from '@/components/Grid';

import Container from '@/components/Container';

import './Counts.scss';

const Counts: React.FC = () => {
  return (
    <Container>
      <div className='counts'>
        <Grid.Row gutter={[24, 24]}>
          <Grid.Col xs={24} md={12} xl={6}>
            <div className='count-box'>
              <i className='bi bi-emoji-smile'></i>
              <span className='purecounter'></span>
              <p>Happy Clients</p>
            </div>
          </Grid.Col>

          <Grid.Col xs={24} md={12} xl={6}>
            <div className='count-box'>
              <i className='bi bi-journal-richtext'></i>
              <span className='purecounter'></span>
              <p>Projects</p>
            </div>
          </Grid.Col>

          <Grid.Col xs={24} md={12} xl={6}>
            <div className='count-box'>
              <i className='bi bi-headset'></i>
              <span className='purecounter'></span>
              <p>Hours Of Support</p>
            </div>
          </Grid.Col>

          <Grid.Col xs={24} md={12} xl={6}>
            <div className='count-box'>
              <i className='bi bi-award'></i>
              <span className='purecounter'></span>
              <p>Awards</p>
            </div>
          </Grid.Col>
        </Grid.Row>
      </div>
    </Container>
  );
};

export default Counts;
