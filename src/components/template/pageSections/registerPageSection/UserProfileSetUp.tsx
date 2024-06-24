"use client"

import React from 'react';
import { useFormikContext, Field } from 'formik';
import { FormData } from '@/validations/YUP';
import { FaPencilAlt } from 'react-icons/fa';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
interface UserProfileSetUpProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const UserProfileSetUp: React.FC<UserProfileSetUpProps> = ({ formData, setFormData }) => {
  const { setFieldValue } = useFormikContext<FormData>();

  const handleImageUpload = (result: any) => {
    if (result?.info) {
      setFieldValue('avatar', result.info.url);
    }
  };

  return (
    <div className='w-full'>
      <h1 className='text-xl md:text-3xl font-bold my-5'>Set Up Your Profile</h1>
      <div className='flex flex-col'>
        <label htmlFor='avatar' className='text-lg md:text-xl font-semibold'>
          Upload Avatar
        </label>
        <CldUploadWidget
          onSuccess={(result, widget) => {
            handleImageUpload(result);
            // widget.close(); // Uncomment if you want to close the widget after upload
          }}
          uploadPreset="bagwise"
        >
          {({ open }) => (
            <div className='relative cursor-pointer' onClick={() => open()}>
              <Image
                src={formData.avatar}
                height={300}
                alt='Avatar'
                width={100}
                className='rounded-full'
              />
              <span className="absolute z-10 bottom-5 left-1">
                <FaPencilAlt size={20} className='text-blue' />
              </span>
            </div>
          )}
        </CldUploadWidget>
        
      </div>
      <div className='flex flex-col'>
        <label htmlFor='address' className='text-lg md:text-xl font-semibold'>
          Enter Your Address
        </label>
        <Field
          type='text'
          id='address'
          name='address'
          placeholder='Address'
          className='w-full p-2 rounded-lg mb-2 mt-4 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-200'
        />
      
      </div>
    </div>
  );
};

export default UserProfileSetUp;
