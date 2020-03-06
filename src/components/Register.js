import React from 'react';
import axios from 'axios';
import { withFormik, Formik, Form, Field } from 'formik';
// import {Link} from 'react-router-dom';
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



const FormikRegister = withFormik({

    mapPropsToValues({ user, email, password }) {
        return {
        user: user || "",
        email: email || "",
        password: password || "",
        };
    },

    handleSubmit(values, { props, resetForm }) {
        const params ={
        username: values.user,
        email: values.email,
        password: values.password
        }

    axios
        .post("https://foodtruck-tracker-lambda1.herokuapp.com/api/auth/diner/register", params)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.user.id);
            props.history.push("/login")
            resetForm();
        })
        .catch(error => {
            alert(error.message)
        });
    }
})(Register);



export default FormikRegister;