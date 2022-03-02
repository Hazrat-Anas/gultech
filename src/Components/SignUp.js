import React,{useState} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
function SignUp() {
    const [isCreated, setisCreated] = useState('')
    // Validation of Forms
    // FormsIk
    const formik = useFormik({
        // initalValues
        initialValues: {
            name:'',
            email: '',
            password: '',
            confirmPassword: ''
        },
        // SubmitHandler
        onSubmit: values => {
            console.log("submittes")
                axios.post('http://localhost:3000/user',values).then(res=>{
                    setisCreated('Account Created')
                    console.log(res)
                    

                }).catch(error=>{
                    console.log('failed')
                    console.log(error)
                    setisCreated('Account Created Failed')
                })
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(8, 'Password Must be 8 characters or more')
                .required('Required'),
                confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords Must Match'),
                name: Yup.string().required('Please enter user name'),
                
        }),
    });
    // FormsIk ....
    return (
        <div className="container">
            <div className="row text-center">
                <p className='display-5'>
                    Create Account
                </p>
                <div className="card offset-md-3 col-md-6">
                    <div className="card-body">
                        <form className="row g-3" onSubmit={formik.handleSubmit}>
                            <div className="col-md-12">
                                <label htmlFor="name" className="form-label">User Name</label>
                                <input type="text" className="form-control" id="name" name='name'
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                                  {formik.touched.name && formik.errors.name ? (
                                <div className='text-danger'>{formik.errors.name}</div>
                            ) : null}
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="emaid" className="form-control" id="email" name='email'
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                  {formik.touched.email && formik.errors.email ? (
                                <div className='text-danger'>{formik.errors.email}</div>
                            ) : null}
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="Password" name='password'
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />    
                              {formik.touched.password && formik.errors.password ? (
                                <div className='text-danger'>{formik.errors.password}</div>
                            ) : null}
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="confrimPassword" name='confirmPassword'
                                    onChange={formik.handleChange}
                                    value={formik.values.confirmPassword}
                                />
                                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div className='text-danger'>{formik.errors.confirmPassword}</div>
                            ) : null}
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Create Account</button>
                            </div>   
                            <p>
                        {isCreated}
                        </p>             
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp