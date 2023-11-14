import React from 'react';

import * as Icons from 'components/Icons';

import './Card.scss';

const Card: React.FC = () => {
  return (
    <div data-aos='fade-up' data-aos-duration='2000' className='interests-box  gap-2'>
      <Icons.Store />
      <h3>Lorem Ipsum</h3>
    </div>
  );
};

export default Card;
