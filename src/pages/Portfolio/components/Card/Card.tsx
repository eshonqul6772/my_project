import React from 'react';

import './Card.scss';

const Card: React.FC = () => {
  return (
    <div data-aos='fade-up' data-aos-duration='2000' className='portfolio-item filter-web'>
      <div className='portfolio-wrap'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg' alt='' />
        <div className='portfolio-info'>
          <h4>Web 3</h4>
          <p>Web</p>
          <div className='portfolio-links'>
            <a
              href='https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg'
              data-gallery='portfolioGallery'
              className='portfolio-lightbox'
              title='Web 3'
            >
              <i className='bx bx-plus'></i>
            </a>
            <a
              href='#'
              data-gallery='portfolioDetailsGallery'
              data-glightbox='type: external'
              className='portfolio-details-lightbox'
              title='Portfolio Details'
            >
              <i className='bx bx-link'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
