"use client"

import React from 'react'
import {
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
  import { useFormik } from "formik";
import { useCategory } from '@/customHooks/useCategory';
import { categorySchema } from '@/validations/YUP';
import { Button } from '../ui/button';
function CategoryModel() {
    const {doAddCategory} = useCategory()
    const formik = useFormik({
      initialValues: {
        name: "",
        description: "",
      },
      validationSchema: categorySchema,
      onSubmit: doAddCategory,
    });
  return (
  
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add Category</DialogTitle>    
      </DialogHeader>
      <form onSubmit={formik.handleSubmit}>
         <div className='flex flex-col'>
       <input
            type='text'
            name='name'
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder='Category Name'
            className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-500 dark:border-black'
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-600 text-sm">
              {formik.errors.name}
            </div>
          ) : null}
        </div>
        <div className='flex flex-col'>
          <textarea
            name='description'
            onBlur={formik.handleBlur}
            value={formik.values.description}
            onChange={formik.handleChange}
            rows={5}
            placeholder='Category description'
            className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-500 dark:border-black'
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-600 text-sm">
              {formik.errors.description}
            </div>
          ) : null}
        </div>
        <div className='flex items-center justify-end mt-6'> 

        <DialogClose asChild>

          <Button variant={'ghost'} size={'lg'}>
            Close
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant={'primary'} disabled={!formik.isValid} type='submit' size={'lg'} >
            save
            </Button>
        </DialogClose>
        </div>
        </form>
    </DialogContent>
  )
}

export default CategoryModel

