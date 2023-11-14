import React from 'react';

import * as Grid from 'components/Grid';
import * as Icons from 'components/Icons';

import Container from 'components/Container';

import Card from './components/Card';

const Interests: React.FC = () => {
  return (
    <Container>
      <div className='section-title pt-3'>
        <h2>Interests</h2>
      </div>

      <Grid.Row gutter={[24, 24]}>
        <Grid.Col xs={24} md={8} xl={6}>
          <Card />
        </Grid.Col>
        <Grid.Col xs={24} md={8} xl={6}>
          <div data-aos='fade-up' data-aos-duration='2000' className='interests-box gap-2'>
            <Icons.Chart />
            <h3>Dolor Sitema</h3>
          </div>
        </Grid.Col>
        <Grid.Col xs={24} md={8} xl={6}>
          <div data-aos='fade-up' data-aos-duration='2000' className='interests-box gap-2'>
            <Icons.Calendar />
            <h3>Sed perspiciatis</h3>
          </div>
        </Grid.Col>
        <Grid.Col xs={24} md={8} xl={6}>
          <div data-aos='fade-up' data-aos-duration='2000' className='interests-box gap-2'>
            <Icons.Paint />
            <h3>Magni Dolores</h3>
          </div>
        </Grid.Col>
        <Grid.Col xs={24} md={8} xl={6}>
          <div data-aos='fade-up' data-aos-duration='2000' className='interests-box gap-2'>
            <Icons.Database />
            <h3>Nemo Enim</h3>
          </div>
        </Grid.Col>
        <Grid.Col xs={24} md={8} xl={6}>
          <div data-aos='fade-up' data-aos-duration='2000' className='interests-box gap-2'>
            <Icons.Gradient />
            <h3>Eiusmod Tempor</h3>
          </div>
        </Grid.Col>
        <Grid.Col xs={24} md={8} xl={6}>
          <div data-aos='fade-up' data-aos-duration='2000' className='interests-box gap-2'>
            <Icons.FileList />
            <h3>Midela Teren</h3>
          </div>
        </Grid.Col>
        <Grid.Col xs={24} md={8} xl={6}>
          <div data-aos='fade-up' data-aos-duration='2000' className='interests-box gap-2'>
            <Icons.Price />
            <h3>Pira Neve</h3>
          </div>
        </Grid.Col>
        <Grid.Col xs={24} md={8} xl={6}>
          <div data-aos='fade-up' data-aos-duration='2000' className='interests-box gap-2'>
            <Icons.Anchor />
            <h3>Dirada Pack</h3>
          </div>
        </Grid.Col>
        <Grid.Col xs={24} md={8} xl={6}>
          <div data-aos='fade-up' data-aos-duration='2000' className='interests-box gap-2'>
            <Icons.Disk />
            <h3>Moton Ideal</h3>
          </div>
        </Grid.Col>
        <Grid.Col xs={24} md={8} xl={6}>
          <div data-aos='fade-up' data-aos-duration='2000' className='interests-box gap-2'>
            <Icons.Station />
            <h3>Verdo Park</h3>
          </div>
        </Grid.Col>
        <Grid.Col xs={24} md={8} xl={6}>
          <div data-aos='fade-up' data-aos-duration='2000' className='interests-box gap-2'>
            <Icons.FingerPrint />
            <h3>Flavor Nivelanda</h3>
          </div>
        </Grid.Col>
      </Grid.Row>
    </Container>
  );
};

export default Interests;
