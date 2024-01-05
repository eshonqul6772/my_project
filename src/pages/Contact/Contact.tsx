import React, { useCallback } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaTwitter, FaFacebookF } from 'react-icons/fa6';
import { FaInstagram, FaLinkedin,FaSkype  } from 'react-icons/fa';


import * as Icons from '@/components/Icons';
import * as Grid from '@/components/Grid';

import Container from '@/components/Container';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';

import cls from './Contact.module.scss';

interface IForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const schema = Yup.object().shape({
    name: Yup.string().min(3).required(),
    email: Yup.string().min(3).required(),
    message: Yup.string().min(3).required(),
    subject: Yup.string().min(3).required(),
  });

  const handleOnSubmit = async (values?: any) => {
    const data = {
      name: values.name,
      email: values.email,
      message: values.message,
      subject: values.subject,
    };

    try {
      const apiKey = '6287647192:AAGKvdStksMJ0Phs28z9dXXtWbD9C8kt7Ds';
      const chatId = '2007014336';
      const apiUrl = `https://api.telegram.org/bot${apiKey}/sendMessage`;

      await axios.post(apiUrl, {
        chat_id: chatId,
        text: data,
      });
      console.log('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const formik = useFormik<IForm>({
    initialValues: {
      name: '',
      email: '',
      message: '',
      subject: '',
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });

  const setInputValue = useCallback(
    (key: string, value: any) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik],
  );

  return (
    <section id='contact' className='pb-3'>
      <Container>
        <div style={{paddingTop: '15px'}} className='section-title'>
          <h2 className='te xt-dark'>Contact</h2>
          <p className='text-dark'>Contact Me</p>
        </div>

        <Grid.Row gutter={[24, 24]}>
          <Grid.Col xs={24} md={12} lg={12}>
            <div data-aos='fade-up' data-aos-duration='1000' className={cls.infoBox}>
              <div className={cls.infoBoxicon}>
                <Icons.Location />
              </div>
              <div>
                <h3>My Address</h3>
                <p className={cls.infoBoxparagrft}>Tahkent Uzbekistan</p>
              </div>
            </div>
          </Grid.Col>

          <Grid.Col xs={24} md={12} lg={12}>
            <div data-aos='fade-up' data-aos-duration='1000' className={cls.infoBox}>
              <div className={cls.infoBoxicon}>
                <Icons.Share />
              </div>

              <div>
                <h3 className='text-dark'>Social Profiles</h3>
                <div className={cls.socialLinks}>
                  <a
                    className={cls.link}
                    href='https://www.twitter.com/eshonqul74'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaTwitter/>
                  </a>
                  <a
                    className={cls.link}
                    href='https://www.facebook.com/Eshonqul'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaFacebookF/>
                  </a>
                  <a
                    className={cls.link}
                    href='https://www.instagram.com/maxmadalivich_'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaInstagram/>
                  </a>
                  <a
                    className={cls.link}
                    href='https://www.linkedin.com/in/eshonqul-abdulazizov-947230244/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaLinkedin/>
                  </a>
                  <a className={cls.link} href='#'>
                    <FaSkype/>
                  </a>
                </div>
              </div>
            </div>
          </Grid.Col>

          <Grid.Col xs={24} md={12} lg={12}>
            <div data-aos='fade-up' data-aos-duration='1000' className={cls.infoBox}>
              <div className={cls.infoBoxicon}>
                <Icons.Location />
              </div>
              <div>
                <h3 className='text-dark'>Email Me</h3>
                <p className={cls.infoBoxparagrft}>abdulazizoveshonqul66@gmail.com</p>
              </div>
            </div>
          </Grid.Col>

          <Grid.Col xs={24} md={12} lg={12}>
            <div data-aos='fade-up' data-aos-duration='1000' className={cls.infoBox}>
              <div className={cls.infoBoxicon}>
                <Icons.Location />
              </div>
              <div>
                <h3 className='text-dark'>Call Me</h3>
                <p className={cls.infoBoxparagrft}>+998 97 167 47 48</p>
              </div>
            </div>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row gutter={[24, 24]}>
          <Grid.Col xs={12}>
            <Input
              type='text'
              label='last_name'
              placeholder='Your Name'
              value={formik.values.name}
              name='name'
              onChange={(e: any) => setInputValue('name', e)}
              state={formik.errors.name && 'error'}
              message={formik.errors.name}
            />
          </Grid.Col>

          <Grid.Col xs={12}>
            <Input
              type='email'
              label='email'
              placeholder='Your email'
              value={formik.values.email}
              name='email'
              onChange={(e: any) => setInputValue('email', e)}
              state={formik.errors.email && 'error'}
              message={formik.errors.email}
            />
          </Grid.Col>

          <Grid.Col xs={24}>
            <Input
              type='text'
              label='subject'
              placeholder='Your subject'
              value={formik.values.subject}
              name='subject'
              onChange={(e: any) => setInputValue('subject', e)}
              state={formik.errors.subject && 'error'}
              message={formik.errors.subject}
            />
          </Grid.Col>

          <Grid.Col xs={24}>
            <Textarea
              name='message'
              placeholder='Message'
              value={formik.values.message}
              onChange={(e: any) => setInputValue('message', e)}
              state={formik.errors.subject && 'default'}
              message={formik.errors.subject}
            />
          </Grid.Col>

          <Grid.Col xs={24}>
            <div className={cls.submitBtn}>
              <Button
                onClick={formik.handleSubmit}
                htmlType='submit'
                title='submit'
                variant='blue'
              />
            </div>
          </Grid.Col>
        </Grid.Row>
      </Container>
    </section>
  );
};

export default Contact;
