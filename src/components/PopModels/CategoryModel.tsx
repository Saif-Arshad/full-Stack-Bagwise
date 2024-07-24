"use client"

import React,{useState, useEffect} from 'react'
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
function CategoryModel({selectedCategory}:any) {
  const [isUpdate,setIsUpdate] = useState(false)
  const [id,setId]= useState()
    console.log("🚀 ~ CategoryModel ~ isUpdate:", isUpdate)
    console.log("🚀 ~ CategoryModel ~ selectedCategory:", selectedCategory)
    const {doAddCategory,doUpdateCategory} = useCategory()

    const submitCategory = (value:any,action:any)=>{
      if(isUpdate){
        setIsUpdate(false)
        doUpdateCategory(value,action,id)
        console.log("hello world")
      }else{
        doAddCategory(value,action)
      }

    }

    const formik = useFormik({
      initialValues: {
        name: "",
        description: "",
      },
      validationSchema: categorySchema,
      onSubmit: submitCategory,
    });
    useEffect(()=>{
      if(selectedCategory){
        setIsUpdate(true)
        formik.setFieldValue("name",selectedCategory.name)
        formik.setFieldValue("description",selectedCategory.description)
        setId(selectedCategory._id)
      
      }

    },[selectedCategory])
  return (
  
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{isUpdate ? "Edit" : "Add"} Category</DialogTitle>    
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
            className='w-full p-2 rounded-lg mb-2 mt-1 focus:border-slate-300  outline-none border border-slate-200 dark:border-black'
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
            className='w-full p-2 rounded-lg mb-2 mt-1 focus:border-slate-300  outline-none border border-slate-200 dark:border-black'

          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-600 text-sm">
              {formik.errors.description}
            </div>
          ) : null}
        </div>
        <div className='flex items-center justify-end mt-6 gap-x-2'> 

        <DialogClose asChild>

          <Button variant={'ghost'} size={'lg'}>
            Close
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant={'primary'} disabled={!formik.isValid} type='submit' size={'lg'} >
          {isUpdate ? "Update" : "Save"}
            </Button>
        </DialogClose>
        </div>
        </form>
    </DialogContent>
  )
}

export default CategoryModel

