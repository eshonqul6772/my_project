import React from 'react';

import * as Components from './components';

const About = () => {
  return (
    <section id='about' data-aos='fade-up' data-aos-duration='1000'>
      <Components.AboutMe />
      <Components.Counts />
      <Components.Skills />
      <Components.Interests />
      <Components.Testimonials />
    </section>
  );
};

export default About;
