import React from 'react';
import { Form, Formik } from 'formik';
import { useMutation } from 'react-query';

import * as Api from '../api';
import * as Mappers from '../mappers';

const Profile = ({ onSuccess, onError, onSettled, children }) => {
  const mutation = useMutation(
    async values => {
      const { data } = await Api.Login({ values });

      return Mappers.Token(data);
    },
    {
      onSuccess,
      onError,
      onSettled,
    },
  );

  const handleSubmit = (values, { isSubmitting, setSubmitting }) => {
    if (!isSubmitting) {
      setSubmitting(true);
      mutation.mutate(values, {
        onError: () => setSubmitting(false),
      });
    }
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        username: '',
        firstName: '',
        lastName: '',
        photo: '',
        password: ''
      }}
      enableReinitialize
    >
      {(props) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Profile;
