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
  export const logInSchema = Yup.object().shape({
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
  export const resetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),

  })
  export const NewPasswordSchema = Yup.object().shape({
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  })
  export const categorySchema =Yup.object().shape({

    name: Yup.string().required('Category Name is required'),
    description: Yup.string().required('Category description is required'), 
  })
  export const productSchema = Yup.object().shape({
    name: Yup.string().required("Product Name is required"),
    description: Yup.string().required("Product description is required"),
    price: Yup.number()
      .required("Price is required")
      .moreThan(0, "Price must be greater than zero"),
    category: Yup.string().required("Category is required"),
    quantity: Yup.number()
      .required("Quantity is required")
      .moreThan(0, "Quantity must be greater than zero"),
  });