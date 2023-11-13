import React from 'react';

import * as Grid from 'components/Grid';

import Container from 'components/Container';

import './Skills.scss';

const Skills: React.FC = () => {
  return (
    <Container>
      <div className='section-title'>
        <h2>Skills</h2>
      </div>

      <Grid.Row gutter={[24, 24]}>
        <Grid.Col xs={24} md={12} xl={12}>
          <div className='progress'>
            <span className='skill'>
              HTML <i className='val'>100%</i>
            </span>
            <div className='progress-bar-wrap'>
              <div className='progress-bar'></div>
            </div>
          </div>

          <div className='progress'>
            <span className='skill'>
              CSS <i className='val'>70%</i>
            </span>
            <div className='progress-bar-wrap'>
              <div className='progress-bar'></div>
            </div>
          </div>

          <div className='progress'>
            <span className='skill'>
              JavaScript <i className='val'>70%</i>
            </span>
            <div className='progress-bar-wrap'>
              <div className='progress-bar'></div>
            </div>
          </div>
        </Grid.Col>

        <Grid.Col xs={24} md={12} xl={12}>
          <div className='progress'>
            <span className='skill'>
              React js<i className='val'>70%</i>
            </span>
            <div className='progress-bar-wrap'>
              <div className='progress-bar'></div>
            </div>
          </div>

          <div className='progress'>
            <span className='skill'>
              Tilwind css <i className='val'>60%</i>
            </span>
            <div className='progress-bar-wrap'>
              <div className='progress-bar'></div>
            </div>
          </div>

          <div className='progress'>
            <span className='skill'>
              sass/scss <i className='val'>70%</i>
            </span>
            <div className='progress-bar-wrap'>
              <div className='progress-bar'></div>
            </div>
          </div>
        </Grid.Col>
      </Grid.Row>
    </Container>
  );
};

export default Skills;
