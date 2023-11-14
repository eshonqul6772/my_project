import React from 'react';

import './Card.scss';

const Card: React.FC = () => {
  return (
    <div data-aos='fade-up' data-aos-duration='2000' className='icon-box'>
      <div className='icon'>
        <i className='bx bxl-dribbble'></i>
      </div>
      <h4>
        <a href=''>Lorem Ipsum</a>
      </h4>
      <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
    </div>
  );
};

export default Card;
