import React from 'react';

import * as Icons from 'assets/Icons';

import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <div className='section-title'>
          <h2 className='te xt-dark'>Contact</h2>
          <p className='text-dark'>Contact Me</p>
        </div>

        <div className='row mt-2'>
          <div className='col-md-6 d-flex align-items-stretch'>
            <div className='info-box'>
              <Icons.Location />
              <h3 className='text-dark'>My Address</h3>
              <p className='text-dark'>Tahkent Uzbekistan</p>
            </div>
          </div>

          <div className='col-md-6 mt-4 mt-md-0 d-flex align-items-stretch'>
            <div className='info-box'>
              <Icons.Share />
              <h3 className='text-dark'>Social Profiles</h3>
              <div className='social-links'>
                <a
                  href='https://www.twitter.com/eshonqul74'
                  target='_blank'
                  className='twitter'
                  rel='noreferrer'
                >
                  <i className='bi bi-twitter'></i>
                </a>
                <a
                  href='https://www.facebook.com/Eshonqul'
                  target='_blank'
                  className='facebook'
                  rel='noreferrer'
                >
                  <i className='bi bi-facebook'></i>
                </a>
                <a
                  href='https://www.instagram.com/maxmadalivich_'
                  target='_blank'
                  className='instagram'
                  rel='noreferrer'
                >
                  <i className='bi bi-instagram'></i>
                </a>
                <a
                  href='https://www.linkedin.com/in/eshonqul-abdulazizov-947230244/'
                  target='_blank'
                  className='linkedin'
                  rel='noreferrer'
                >
                  <i className='bi bi-linkedin'></i>
                </a>
                <a href='#' className='google-plus'>
                  <i className='bi bi-skype'></i>
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-6 mt-4 d-flex align-items-stretch'>
            <div className='info-box'>
              <i className='fas fa-envelope'></i>
              <h3 className='text-dark'>Email Me</h3>
              <p className='text-dark'>abdulazizoveshonqul66@gmail.com</p>
            </div>
          </div>
          <div className='col-md-6 mt-4 d-flex align-items-stretch'>
            <div className='info-box'>
              <i className='fas fa-phone'></i>
              <h3 className='text-dark'>Call Me</h3>
              <p className='text-dark'>+998 97 167 47 48</p>
            </div>
          </div>
        </div>

        <form action='forms/contact.php' method='post' role='form' className='php-email-form mt-4'>
          <div className='row'>
            <div className='col-md-6 form-group'>
              <input
                type='text'
                name='name'
                className='form-control'
                id='name'
                placeholder='Your Name'
                required
              />
            </div>
            <div className='col-md-6 form-group mt-3 mt-md-0'>
              <input
                type='email'
                className='form-control'
                name='email'
                id='email'
                placeholder='Your Email'
                required
              />
            </div>
          </div>
          <div className='form-group mt-3'>
            <input
              type='text'
              className='form-control'
              name='subject'
              id='subject'
              placeholder='Subject'
              required
            />
          </div>
          <div className='form-group mt-3'>
            <textarea
              className='form-control'
              name='message'
              placeholder='Message'
              required
            ></textarea>
          </div>
          <div className='my-3'>
            <div className='loading'>Loading</div>
            <div className='error-message'></div>
            <div className='sent-message'>Your message has been sent. Thank you!</div>
          </div>
          <div className='text-center'>
            <button type='submit'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
