"use client"

import React,{useState,useEffect} from 'react';
import { useFormikContext, Field } from 'formik';
import { FormData } from '@/validations/YUP';
import { FaPencilAlt } from 'react-icons/fa';
import { CldUploadWidget } from 'next-cloudinary';
import { BsPencil } from "react-icons/bs";
import Image from 'next/image';
interface UserProfileSetUpProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const UserProfileSetUp: React.FC<UserProfileSetUpProps> = ({ formData, setFormData }) => {
  const { setFieldValue } = useFormikContext<FormData>();
  const [userImage,setUserImage] = useState("https://res.cloudinary.com/di6r722sv/image/upload/v1719230475/kj3qiomxuis6sjiu3dwl.png")
  const handleImageUpload = (result: any) => {
    console.log("🚀 ~ handleImageUpload ~ result:", result)
    
    if (result?.info) {
      setUserImage(result.info.url)
    }
  };
  useEffect(()=>{
    setFieldValue('avatar', userImage);
  },[userImage])

  return (
    <div className='w-full'>
      <h1 className='text-xl md:text-3xl font-bold my-5' id="setUpProfile">Set Up Your Profile</h1>
      <div className='flex flex-col'>
        <label htmlFor='avatar' className='text-lg md:text-xl my-4 font-semibold'>
          Upload Avatar <span className='text-sm'>(Optional) </span>
        </label>
        <CldUploadWidget
          onSuccess={(result, widget) => {
            handleImageUpload(result);
          }}
          uploadPreset="bagwise"
        >
          {({ open }) => (
            <div className='group cursor-pointer rounded-full overflow-hidden h-20 w-20  relative  hover:backdrop-blur-2xl' onClick={() => open()} >
              <Image
                src={formData.avatar ? formData.avatar : userImage}
                height={200}
                alt='Avatar'
                width={100}
                className=' object-cover'
              />
              <div className="bg-[#00000064] h-full scale-0 group-hover:scale-100 transition ease-in-out w-full absolute top-0 left-0 flex items-center justify-center">
              <BsPencil  size={25} className="text-slate-200"/>
              </div>
           
            </div>
          )}
        </CldUploadWidget>
        
      </div>
      <div className='flex flex-col my-4'>
        <label htmlFor='address' className='text-lg md:text-xl font-semibold'>
          Your Address <span className='text-sm'>(Optional) </span>
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
