"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FaCamera } from "react-icons/fa";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../ui/button";
import { ASSETS } from "../../../public/IMAGES";
import { productSchema } from "@/validations/YUP";

function ProductModel() {
  const isUpdate = false;
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
  const [coverPhotoURL, setCoverPhotoURL] = useState<string | null>(null);
  const coverPhotoInputRef = useRef<HTMLInputElement | null>(null);

  const submitProduct = (value: any) => {
    console.log("🚀 ~ submitProduct ~ value:", value);
  };

  useEffect(() => {
    if (coverPhoto) {
      const coverPhotoURL = URL.createObjectURL(coverPhoto);
      setCoverPhotoURL(coverPhotoURL);
    }
    return () => {
      if (coverPhotoURL) {
        URL.revokeObjectURL(coverPhotoURL);
      }
    };
  }, [coverPhoto]);

  const handleCoverPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCoverPhoto(file);
    }
  };

  const handleCoverPhotoButtonClick = () => {
    if (coverPhotoInputRef.current) {
      coverPhotoInputRef.current.click();
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: 0,
      quantity: 0,
      category: "",
    },
    validationSchema: productSchema,
    onSubmit: submitProduct,
  });
  console.log(formik)
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{isUpdate ? "Edit" : "Add"} Product</DialogTitle>
      </DialogHeader>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          <div className="relative">
            <Image
              src={coverPhotoURL || ASSETS.grayImage}
              alt="cover photo"
              height={120}
              width={200}
              className="h-36 w-64 rounded-md"
              onClick={handleCoverPhotoButtonClick}
            />
            <button
              className="absolute bottom-0 left-0 rounded-full bg-[#FFF] p-2.5 focus:outline-none"
              onClick={handleCoverPhotoButtonClick}
              type="button"
            >
              <FaCamera className="text-xl text-[#939393]" />
            </button>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              ref={coverPhotoInputRef}
              onChange={handleCoverPhotoChange}
              className="hidden"
            />
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="name" className="mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Product Name"
            className="w-full p-2 rounded-lg mb-2 mt-1 focus:border-slate-300 outline-none border border-slate-200 dark:border-black"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-600 text-sm mb-2">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="description" className="mb-1">Product Description</label>
          <textarea
            name="description"
            id="description"
            onBlur={formik.handleBlur}
            value={formik.values.description}
            onChange={formik.handleChange}
            rows={5}
            placeholder="Product Description"
            className="w-full p-2 rounded-lg mb-2 mt-1 focus:border-slate-300 outline-none border border-slate-200 dark:border-black"
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-600 text-sm mb-2">{formik.errors.description}</div>
          ) : null}
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="price" className="mb-1">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            className="w-full p-2 rounded-lg mb-2 mt-1 focus:border-slate-300 outline-none border border-slate-200 dark:border-black"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="text-red-600 text-sm mb-2">{formik.errors.price}</div>
          ) : null}
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="quantity" className="mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="w-full p-2 rounded-lg mb-2 mt-1 focus:border-slate-300 outline-none border border-slate-200 dark:border-black"
            value={formik.values.quantity}
            onChange={formik.handleChange}
          />
          {formik.touched.quantity && formik.errors.quantity ? (
            <div className="text-red-600 text-sm mb-2">{formik.errors.quantity}</div>
          ) : null}
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="category" className="mb-1">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            className="w-full p-2 rounded-lg mb-2 mt-1 focus:border-slate-300 outline-none border border-slate-200 dark:border-black"
            value={formik.values.category}
            onChange={formik.handleChange}
          />
          {formik.touched.category && formik.errors.category ? (
            <div className="text-red-600 text-sm mb-2">{formik.errors.category}</div>
          ) : null}
        </div>

        <div className="flex items-center justify-end mt-6 gap-x-2">
          <DialogClose asChild>
            <Button variant="ghost" size="lg">
              Close
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="primary" disabled={!formik.isValid} type="submit" size="lg">
              {isUpdate ? "Update" : "Save"}
            </Button>
          </DialogClose>
        </div>
      </form>
    </DialogContent>
  );
}

export default ProductModel;
