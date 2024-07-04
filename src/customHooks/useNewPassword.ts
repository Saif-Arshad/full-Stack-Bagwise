"use client"
 import { useState } from "react"
 import toast from "react-hot-toast";

export const useNewPassword = ()=>{
    const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  
    const newPassword = async(value:any , { resetForm }: any) => {
        console.log("🚀 ~ forgetPassword ~ value:", value)
        
        try {
            setLoading(true)
        const resetPassword = await fetch("/api/user/new-password",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(value),
        })
        const res = await resetPassword.json()
        console.log(res)
        // if(res.success){
        //     toast.success("Email send sucessfully please check email")
        //     return
        // }
        // if(res.error){
        //     toast.error(res.error.message)
        //     return
        // }
   
    } catch (error) {
                console.log(error)
                toast.error("Something went wrong please try again later")
    }finally{
        setLoading(false)
        resetForm()
    }

    }

return{
    loading,
    newPassword,
    togglePasswordVisibility,
    showPassword
}
}