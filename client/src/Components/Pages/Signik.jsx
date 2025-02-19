// import axios from 'axios'
// import { Formik, useFormik } from 'formik'
// import React, { useState } from 'react'
// import { userSchema } from './userSchema'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from '../../cartSlice';
import { use } from 'react';

const Signik = () => {
     const cartCount = useSelector((state)=>state.cart.value)
  
     const dispatch = useDispatch()
    // const {handleChange, values, errors, handleSubmit, resetForm, setFieldValue} = useFormik({
    //     initialValues:{
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         password: '',
    //         // image: null
    //     },

    //     validationSchema: userSchema,

    //     onSubmit: values => {
    //         // let studentData = new FormData()
    //         // studentData.append('firstName', values.firstName)
    //         // studentData.append('lastName', values.lastName)
    //         // studentData.append('email', values.email)
    //         // studentData.append('password', values.password)
    //         // studentData.append('image', values.image)
    //         console.log(values)
    //         resetForm()
    //         // axios.post("https://project-1-backend-9424.onrender.com/signup", values)
    //     }
    // })
  return (
    <>
        {/* <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder='first Name' id="" onChange={handleChange} value={values.firstName} />
            <span>{errors.firstName}</span>
            <input type="text" name="lastName" placeholder='Last Name' id="" onChange={handleChange} value={values.lastName}/>
            <span>{errors.lastName}</span>
            <input type="email" name="email" placeholder='email' id="" onChange={handleChange} value={values.email}/>
            <span>{errors.email}</span>

            <input type="password" name="password" placeholder='password' id="" onChange={handleChange} value={values.password}/>
            <span>{errors.password}</span>

            <input type="file" name="image"  id="" onChange={(e)=>{setFieldValue("image", e.target.files[0])}}/>
            <input type="submit" value="Create account" />
        </form> */}



        <div className='d-flex justify-content-center align-items-center vh-100 flex-column w-100 gap-3'>
            <h1 className='fs-1'>{cartCount}</h1>
            <div className='d-flex gap-3'>
            <button className='btn btn-danger w-50' onClick={()=>{dispatch(decrease())}}>-</button>
            <button className='btn btn-warning w-50' onClick={()=>{dispatch(increase())}}>+</button>
            </div>
        </div>
    </>
  )
}

export default Signik