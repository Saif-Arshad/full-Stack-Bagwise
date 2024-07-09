"use client"


import { useState } from "react"
import toast from "react-hot-toast"

export const useCategory = ()=>{
    const getToken = () => {
        return localStorage.getItem("bagwise_token");
      };
    const doAddCategory = async(value:any,{resetForm}:any) => {
        console.log("🚀 ~ doAddCategory ~ value:", value)
      const token = getToken()
        try {
            
            const addCategory = await fetch("/api/category/create",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(value.name,value.description,token!),
            })
            const res  =  await addCategory.json()
            console.log("🚀 ~ doAddCategory ~ res:", res)
        } catch (error) {
            console.log("🚀 ~ doAddCategory ~ error:", error)
            toast.error("error in creating category")
        }
    }
    return{
        doAddCategory
    }
}