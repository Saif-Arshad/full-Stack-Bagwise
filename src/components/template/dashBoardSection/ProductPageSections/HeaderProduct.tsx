import React from 'react'
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
import ProductModel from '@/components/PopModels/ProductModel';
function HeaderProduct() {
  return (
    <div className='flex my-8 items-start justify-start flex-col sm:flex-row sm:justify-between'>
        <div className='flex flex-col'>
        <h3 className='font-semibold md:text-bold text-2xl md:text-3xl lg:text-4xl'>Product Management!</h3>
        <p className='text-sm mt-2 sm:ml-4'>Here&rsquo;s a list of your Products!</p>
        </div>
        <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="bg-black text-sm mt-4 dark:bg-[#424245] text-white font-semibold w-40 flex gap-y-1 flex-col items-center justify-center p-2 rounded-md"
        >
          Add Product
        </button>
        </DialogTrigger>
      <ProductModel/>
  </Dialog>
    </div>
  )
}

export default HeaderProduct
