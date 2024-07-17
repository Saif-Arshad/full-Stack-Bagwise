"use client"


import { useState } from "react"
import toast from "react-hot-toast"
import { useToken } from "./useToken"
export const useCategory = ()=>{
    const {token} = useToken()
    const doAddCategory = async(value:any,{resetForm}:any) => {
        const {name,description} = value
        try {
            
            const addCategory = await fetch("/api/category/create",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name,description,token}),
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