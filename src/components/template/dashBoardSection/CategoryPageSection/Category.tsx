"use client";

import React from 'react';
import HeaderCategory from "./HeaderCategory";
import CategoryTable from '../../Tables/CategoryTable';

function Category() {

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
