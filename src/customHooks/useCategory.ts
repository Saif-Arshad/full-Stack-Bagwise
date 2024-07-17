"use client"


import { useState,useContext } from "react"
import {LoaderContext} from '@/context/LoadingContext';
import toast from "react-hot-toast"
import { useToken } from "./useToken"
export const useCategory = ()=>{
    const {token} = useToken()
  const { setoverlayLoading } = useContext(LoaderContext);

    const doAddCategory = async(value:any,{resetForm}:any) => {
        const {name,description} = value
        try {
            setoverlayLoading(true)
            const addCategory = await fetch("/api/category/create",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name,description,token}),
            })
            const res  =  await addCategory.json()
            console.log("🚀 ~ doAddCategory ~ res:", res)
            if(res.success){
                toast.success(res.message)
                resetForm()
            }
        } catch (error) {
            console.log("🚀 ~ doAddCategory ~ error:", error)
            toast.error("error in creating category")
        }finally{
            setoverlayLoading(false)
        }
    }
    return{
        doAddCategory
    }
}