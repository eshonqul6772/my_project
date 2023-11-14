import React from 'react';

import * as Grid from 'components/Grid';

import Container from 'components/Container';

import Card from './components/Card';

const Services: React.FC = () => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <section id='services' className='services'>
      <Container>
        <div className='section-title'>
          <h2>Services</h2>
          <p>My Services</p>
        </div>

        <Grid.Row gutter={[24, 24]}>
          {arr.map(index => (
            <Grid.Col key={index} xs={24} md={12} lg={8}>
              <Card />
            </Grid.Col>
          ))}
        </Grid.Row>
      </Container>
    </section>
  );
};

export default Services;
