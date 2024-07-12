"use client"


export const useToken = ()=>{
    const getToken = () => {
        return localStorage.getItem("bagwise_token");
    };
    const token = getToken()
    return{
        token
    }
}