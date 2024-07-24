"use client"


import { useState,useContext } from "react"
import {LoaderContext} from '@/context/LoadingContext';
import toast from "react-hot-toast"
import { useToken } from "./useToken"
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getCategory } from "@/store/feature/Category.Slice";
import axios from "axios";
export const useCategory = ()=>{
    const {token} = useToken()
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
    const doUpdateCategory = async(value:any,{resetForm}:any,id:any) => {
        console.log("🚀 ~ doUpdateCategory ~ value:", value)
        if(!token){
            toast.error("Invalid Token")
             return
        }
        const {name,description} = value
        console.log("🚀 ~ doUpdateCategory ~ description:", description)
        console.log("🚀 ~ doUpdateCategory ~ name:", name)
        try {
            setoverlayLoading(true)
            const response = await axios.patch(`/api/category/update?id=${id}`, {
                headers: {
                    authorization: `${token}`
                },
                value:value
            });
    
            console.log(response);
            if (response.data.success) {
                toast.success(response.data.message);
                resetForm()
            }
        } catch (error) {
            console.log(error);
            toast.error("Error in update category");
        } finally {
            setoverlayLoading(false);
        }
        // try {
        //     setoverlayLoading(true)
        //     const addCategory = await fetch("/api/category/create",{
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({name,description,token}),
        //     })
        //     const res  =  await addCategory.json()
        //     console.log("🚀 ~ doAddCategory ~ res:", res)
        //     if(res.success){
        //         toast.success(res.message)
        //         resetForm()
        //     }
        // } catch (error) {
        //     console.log("🚀 ~ doAddCategory ~ error:", error)
        //     toast.error("error in creating category")
        // }finally{
        //     setoverlayLoading(false)
        // }
    }
    const doDeleteCategory = async (id: any) => {
        if (!token) {
            toast.error("Invalid Token");
            return;
        }
    
        setoverlayLoading(true);
    
        try {
            const response = await axios.delete(`/api/category/delete?id=${id}`, {
                headers: {
                    authorization: `${token}`
                }
            });
    
            console.log(response);
            if (response.data.success) {
                toast.success(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Error in deleting category");
        } finally {
            setoverlayLoading(false);
        }
    };
    
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
        doGetCategory,
        doDeleteCategory,
        doUpdateCategory
    }
}