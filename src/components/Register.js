import React from 'react';
import { Formik, Form, Field } from 'formik';
import Link from 'react-router-dom';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
    .max(50, 'Name must be less than 50 characters')
    .required('First Name is Required'),
    lastName: Yup.string()
    .max(50, 'Last Name must be less than 50 characters')
    .required('Last Name is required'),
    email: Yup.string()
    .email('Invalid email')
    .required('Email required'),
});


const Register = () => (
    <div>
      <h2>Registration</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
);

export default Register;