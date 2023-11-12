import React from 'react';

import * as Grid from 'components/Grid';

import Card from './components/Card';

import './Portfolio.scss';

const Portfolio: React.FC = () => {
  const arr = [0, 1, 2, 4, 5, 6, 7, 8, 9];

  return (
    <section id='portfolio' className='portfolio'>
      <div className='container'>
        <div className='section-title'>
          <h2>Portfolio</h2>
          <p>My Works</p>
        </div>

        <div className='row'>
          <div className='col-lg-12 d-flex justify-content-center'>
            <ul id='portfolio-flters'>
              <li className='filter-active'>All</li>
              <li>App</li>
              <li>Card</li>
              <li>Web</li>
            </ul>
          </div>
        </div>

        <Grid.Row gutter={[24, 24]}>
          {arr.map(index => (
            <Grid.Col key={index} xs={8}>
              <Card
                imgUrl={'hello'}
                link={'hello'}
                linkData={'hello'}
                paragraph={'hello'}
                title={'hello'}
              />
            </Grid.Col>
          ))}
        </Grid.Row>
      </div>
    </section>
  );
};

export default Portfolio;
