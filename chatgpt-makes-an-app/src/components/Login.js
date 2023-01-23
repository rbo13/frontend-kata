import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

const Login = () => {
    return (
      <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object({
          username: Yup.string()
              .required('Required'),
          password: Yup.string()
              .required('Required')
      })}
      onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
      }}
      >
      {({ isSubmitting, errors, touched }) => (
          <Form>
              <label>
                  Username:
                  <Field type="text" name="username" />
                  <ErrorMessage name="username" component="div" />
              </label>
              <br />
              <label>
                  Password:
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
              </label>
              <br />
              <button type="submit" disabled={isSubmitting}>
                  Login
              </button>
          </Form>
      )}
  </Formik>
  
    );
};
export default Login;
