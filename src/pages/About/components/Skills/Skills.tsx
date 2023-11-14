import React from 'react';
import { Progress } from 'antd';

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
            <span className='skill'>HTML</span>
            <Progress strokeLinecap='butt' percent={80} />
          </div>

          <div className='progress'>
            <span className='skill'>CSS</span>
            <Progress strokeLinecap='butt' percent={70} />
          </div>

          <div className='progress'>
            <span className='skill'>JavaScript</span>
            <Progress strokeLinecap='butt' percent={70} />
          </div>
        </Grid.Col>

        <Grid.Col xs={24} md={12} xl={12}>
          <div className='progress'>
            <span className='skill'>React js</span>
            <Progress strokeLinecap='butt' percent={70} />
          </div>

          <div className='progress'>
            <span className='skill'>Tilwind css</span>
            <Progress strokeLinecap='butt' percent={60} />
          </div>

          <div className='progress'>
            <span className='skill'>sass/scss</span>
            <Progress strokeLinecap='butt' percent={70} />
          </div>
        </Grid.Col>
      </Grid.Row>
    </Container>
  );
};

export default Skills;
