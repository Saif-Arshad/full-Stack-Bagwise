"use client";

import React, { useEffect } from 'react';
import HeaderCategory from "./HeaderCategory";
import CategoryTable from '@/components/Tables/CategoryTable';
import { useCategory } from '@/customHooks/useCategory';
import { useSelector } from 'react-redux';
function Category() {
  const {doGetCategory}= useCategory()
  // useEffect(()=>{
  //   doGetCategory()
  // },[])
  // const data = useSelector((state:any)=>state.category)
  // console.log("🚀 ~ Category ~ data:", data)

  return (
    <>
    <HeaderCategory/>
    <div>
      <CategoryTable/>
    </div>
    </>
  );
}

export default Category;
