import * as yup from 'yup';

export const userSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
    .matches(/^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).+$/, 'Password must contain at least one uppercase letter, one special character, and one number'),
})