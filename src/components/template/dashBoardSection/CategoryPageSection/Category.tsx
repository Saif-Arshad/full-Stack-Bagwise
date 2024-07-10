"use client";

import React from 'react';
import { FaPlus } from "react-icons/fa";
import { Modal, useDisclosure } from "@nextui-org/react";
import CategoryModel from '@/components/PopModels/CategoryModel';

function Category() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex w-full items-center justify-end px-10">
        <button
          type="button"
          onClick={onOpen}
          className="bg-black text-sm mt-4 dark:bg-[#424245] text-white font-semibold w-40 flex gap-x-1 items-center justify-center p-2 rounded-md"
        >
          <FaPlus size={15} /> Add Category
        </button>
      </div>
      <Modal    isOpen={isOpen} onOpenChange={onOpenChange}>
        <CategoryModel />
      </Modal>
    </>
  );
}

export default Category;
