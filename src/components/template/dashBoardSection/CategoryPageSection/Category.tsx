"use client";

import React from 'react';
import { FaPlus } from "react-icons/fa";

function Category() {

  return (
    <>
      <div className="flex w-full items-center justify-end px-10">
        <button
          type="button"
          className="bg-black text-sm mt-4 dark:bg-[#424245] text-white font-semibold w-40 flex gap-x-1 items-center justify-center p-2 rounded-md"
        >
          <FaPlus size={15} /> Add Category
        </button>
      </div>
    </>
  );
}

export default Category;
