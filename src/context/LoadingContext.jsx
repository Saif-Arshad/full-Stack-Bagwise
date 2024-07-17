"use client"

import React, { createContext, useState } from 'react';
import MainLoader from '../components/loader/MainLoader'
export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [overlayLoading, setoverlayLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ overlayLoading, setoverlayLoading }}>
      <div className='relative'>
        {overlayLoading && <MainLoader/>}
      {children}
      </div>
    </LoaderContext.Provider>
  );
};