import React from 'react'
import * as Yup from 'yup';
import './login.scss'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom';
const Login = () => {

  const registerSchema = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required()
  })
  const formik = useFormik({
    initialValues: {
      username: '',
      email: ' ',
      password: ''
    },
    validationSchema: registerSchema,
    onSubmit: (e) => {
      formik.values.username = '';
      formik.values.email = '';
      formik.values.password = '';
    }

  })
  return (
    <div className="login">
      <div className="top-btn">
        <Link to='/register'><button>Register</button></Link>
      </div>
      <div className="box">
        <div className="title">
          <h1>Login</h1>
        </div>
        <form action="" onSubmit={formik.handleSubmit} method='GET'>
          <div className="input">
            <label htmlFor="email">email</label>
            <input type="email" name='email' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} />
            {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
          </div>
          <div className="input">
            <label htmlFor="passord">Password</label>
            <input type="password" name='password' onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} />
            {formik.errors.password && formik.touched.password && <p>{formik.errors.password}</p>}
          </div>

          <button type="submit">login</button>
        </form>
      </div>
    </div>
  )
}

export default Login