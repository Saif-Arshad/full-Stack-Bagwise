export interface FormData {
    firstName: string;
    lastName: string;
    gender?: string;
    email: string;
    password: string;
    avatar?: string;
    address?: string;
  }
  
  import * as Yup from 'yup';
  
  export const signUpSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });
  
  export const profileSchema = Yup.object().shape({
    avatar: Yup.string(),
    address: Yup.string(),
  });

  export const otpSchema = Yup.object().shape({
    otp: Yup.string().required('OTP is required'),
  })
  