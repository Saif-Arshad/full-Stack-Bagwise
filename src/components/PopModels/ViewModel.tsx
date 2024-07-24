import React from 'react'
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
            <p className='my-2 mb-4'><strong className="text-black">ID:</strong> {selectedCategory._id}</p>
            <p className='capitalize'><strong className="text-black">Category Name:</strong> {selectedCategory.name}</p>
            <p className='my-4'><strong className="text-black mb-2">Description:</strong> <br/> {selectedCategory.description}</p>
            <p><strong className="text-black">Created At:</strong> {new Date(selectedCategory.createdAt).toLocaleString()}</p>
            <p><strong className="text-black">Updated At:</strong> {new Date(selectedCategory.updatedAt).toLocaleString()}</p>
          <Button variant={'destructive'} className="my-6" onClick={deleteHandler}>
          <Trash2/>
          </Button>
          </div>
        )}
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
  )
}

export default ViewModel
