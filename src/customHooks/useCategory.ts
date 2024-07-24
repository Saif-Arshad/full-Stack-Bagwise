"use client"


import { useState,useContext } from "react"
import {LoaderContext} from '@/context/LoadingContext';
import toast from "react-hot-toast"
import { useToken } from "./useToken"
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getCategory } from "@/store/feature/Category.Slice";
export const useCategory = ()=>{
    const {token} = useToken()
    console.log("🚀 ~ useCategory ~ token:", token)
  const { setoverlayLoading } = useContext(LoaderContext);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const doAddCategory = async(value:any,{resetForm}:any) => {
        if(!token){
            toast.error("Invalid Token")
             return
        }
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
    const doGetCategory = ()=>{
        if(!token){
            toast.error("Invalid Token")
             return
        }
        try {
            // @ts-ignore
            dispatch(getCategory(token))
        } catch (error) {
            console.log("🚀 ~ doGetCategory ~ error:", error)
        }
        

    }
    return{
        doAddCategory,
        doGetCategory
    }
}