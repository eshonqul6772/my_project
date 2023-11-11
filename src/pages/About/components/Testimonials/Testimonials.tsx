import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonials.scss';

import meImg from 'assets/images/me.jpg';

const Testimonials: React.FC = () => {
  return (
    <>
      <div className='container testimonials'>
        <div className='section-title'>
          <h2>TESTIMONIALS</h2>
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          slidesPerView={3}
          className='mySwiper'
          loop={true}
        >
          <SwiperSlide>
            <div className='swiper-slide'>
              <div className='testimonial-item'>
                <p>
                  <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
                  rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen
                  aliquam, risus at semper.
                  <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                </p>
                <img src={meImg} className='testimonial-img' alt='' />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide'>
              <div className='testimonial-item'>
                <p>
                  <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid
                  cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure
                  amet legam anim culpa.
                  <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                </p>
                <img src={meImg} className='testimonial-img' alt='' />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide'>
              <div className='testimonial-item'>
                <p>
                  <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem
                  veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis
                  sint minim.
                  <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                </p>
                <img src={meImg} className='testimonial-img' alt='' />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide'>
              <div className='testimonial-item'>
                <p>
                  <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim
                  fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore
                  quem dolore labore illum veniam.
                  <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                </p>
                <img src={meImg} className='testimonial-img' alt='' />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide'>
              <div className='testimonial-item'>
                <p>
                  <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor
                  noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam
                  esse veniam culpa fore nisi cillum quid.
                  <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                </p>
                <img src={meImg} className='testimonial-img' alt='' />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide'>
              <div className='testimonial-item'>
                <p>
                  <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
                  rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen
                  aliquam, risus at semper.
                  <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                </p>
                <img src={meImg} className='testimonial-img' alt='' />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide'>
              <div className='testimonial-item'>
                <p>
                  <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid
                  cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure
                  amet legam anim culpa.
                  <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                </p>
                <img src={meImg} className='testimonial-img' alt='' />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide'>
              <div className='testimonial-item'>
                <p>
                  <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem
                  veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis
                  sint minim.
                  <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                </p>
                <img src={meImg} className='testimonial-img' alt='' />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide'>
              <div className='testimonial-item'>
                <p>
                  <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim
                  fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore
                  quem dolore labore illum veniam.
                  <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                </p>
                <img src={meImg} className='testimonial-img' alt='' />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='swiper-slide'>
              <div className='testimonial-item'>
                <p>
                  <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor
                  noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam
                  esse veniam culpa fore nisi cillum quid.
                  <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                </p>
                <img src={meImg} className='testimonial-img' alt='' />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
