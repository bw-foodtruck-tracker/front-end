import React from 'react';
import { Formik, Form, Field } from 'formik';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
username: Yup.string()
.max(50, 'Username be less than 50 characters')
.required('Username is Required'),
email: Yup.string()
.email('Invalid email')
.required('Email required'),
password: Yup.string()
.required('password required'),
});


const Register = () => {

return (
<div>
    <h2>Sign Up</h2>
        <Formik
        initialValues={{
            username: '',
            email: '',
            password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
            console.log(values);
        }}
        >
        {({ errors, touched }) => (
            <Form>
            <Field name="username" />
            {errors.username && touched.username ? (
                <div>{errors.username}</div>
            ) : null}
            <Field name="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" type="password" />
            {errors.password && touched.password ? (
                <div>{errors.password}</div>
            ) : null}
            <button type="submit" >Submit</button>
            </Form>
    )}
    </Formik>
</div>
)};

export default Register;