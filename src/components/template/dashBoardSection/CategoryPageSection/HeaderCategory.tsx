import React from 'react'
import { FaPlus } from "react-icons/fa";
import CategoryModel from "@/components/PopModels/CategoryModel";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog"
function HeaderCategory() {
  return (
    <div className='flex my-8 items-start justify-start flex-col sm:flex-row sm:justify-between'>
        <div className='flex flex-col'>
        <h3 className='font-semibold md:text-bold text-2xl md:text-3xl lg:text-4xl'>Category Management!</h3>
        <p className='text-sm mt-2 sm:ml-4'>Here&rsquo;s a list of your Categories!</p>
        </div>
        <Dialog>
      <DialogTrigger>
        <button
          type="button"
          className="bg-black text-sm mt-4 dark:bg-[#424245] text-white font-semibold w-40 flex gap-y-1 flex-col items-center justify-center p-2 rounded-md"
        >
          Add Category
        </button>
        </DialogTrigger>
        <CategoryModel/>
  </Dialog>
    </div>
  )
}

export default HeaderCategory
