import React from 'react';

import * as Components from './components';

const About = () => {
  return (
    <section id='about'>
      <Components.AboutMe />
      <Components.Counts />
      <Components.Skills />
      <Components.Interests />
      <Components.Testimonials />
    </section>
  );
};

export default About;
