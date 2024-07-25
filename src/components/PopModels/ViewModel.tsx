import React from 'react'
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from '../ui/button';
import { Trash2 } from 'lucide-react';
import { useCategory } from '@/customHooks/useCategory';
function ViewModel({selectedCategory}:any) {
  const {doDeleteCategory} = useCategory()
  const deleteHandler = () => {
    console.log("🚀 ~ deleteHandler ~ id:", selectedCategory._id)
    doDeleteCategory(selectedCategory._id)
  }
  return (
    <DialogContent>
    <DialogHeader>
      <DialogTitle>Category Details</DialogTitle>
      <DialogDescription>
        {selectedCategory && (
          <div className='flex flex-col items-start'>
            <p className='my-2 mb-4'><strong className="text-black dark:text-white">ID:</strong> {selectedCategory._id}</p>
            <p className='capitalize'><strong className="text-black dark:text-white">Category Name:</strong> {selectedCategory.name}</p>
            <p className='my-4'><strong className="text-black dark:text-white mb-2">Description:</strong> <br/> {selectedCategory.description}</p>
            <p><strong className="text-black dark:text-white">Created At:</strong> {new Date(selectedCategory.createdAt).toLocaleString()}</p>
            <p><strong className="text-black dark:text-white">Updated At:</strong> {new Date(selectedCategory.updatedAt).toLocaleString()}</p>
          <DialogClose asChild>
          <Button variant={'destructive'} className="my-6" onClick={deleteHandler}>
          <Trash2/>
          </Button>
          </DialogClose>
          </div>
        )}
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
  )
}

export default ViewModel
