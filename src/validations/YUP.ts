import * as yup from 'yup'

export const signUpSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup
        .string()
        .required('Email is required')
        .email('Email is invalid'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .max(40, 'Password must not exceed 40 characters'),
 
})