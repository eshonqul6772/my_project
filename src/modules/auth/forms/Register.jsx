import React from 'react';
import { Form, Formik } from 'formik';
import { useMutation } from 'react-query';

import * as Api from '../api';

const Register = ({ onSuccess, onError, onSettled, children }) => {
  const mutation = useMutation(
    async values => {
      const { data } = await Api.Register({ values });

      return data;
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
        firstName: '',
        lastName: '',
        username: '',
        password: '',
      }}
      enableReinitialize
    >
      {(props) => <Form>{children(props)}</Form>}
    </Formik>
  );
};

export default Register;
