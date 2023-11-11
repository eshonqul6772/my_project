import React from 'react';

import './Card.scss';

interface ICard{
  imgUrl: string;
  title: string;
  paragraph: string;
  link: string;
  linkData: string;
  key: number;
}

const Card:React.FC<ICard> = ({ imgUrl, title, paragraph, link, linkData, key }) => {
  return (
    <div className='col-lg-4 col-md-6 portfolio-item filter-web'>
      <div className='portfolio-wrap'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg'
          className='img-fluid'
          alt=''
        />
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
              href='portfolio-details.html'
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
    // <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
    //   <div className='portfolio-wrap'>
    //     <img src={imgUrl} className='img-fluid' alt='' />
    //     <div className='portfolio-info'>
    //       <h4>{title}</h4>
    //       <p>{paragraph}</p>
    //       <div className='portfolio-links'>
    //         <a href={link} className='portfolio-lightbox' title='App 1'>
    //           <i className='bx bx-plus'></i>
    //         </a>
    //         <a href={linkData} className='portfolio-details-lightbox' title='Portfolio Details'>
    //           <i className='bx bx-link'></i>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
