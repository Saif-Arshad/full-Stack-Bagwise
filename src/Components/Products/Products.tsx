/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addCart } from "@/Redux/feature/cartSlice"
function Products() {

    const products = useSelector((state:any)=>state.cart.item)
    const dispatch = useDispatch()

    return(
        <div className="w-full">
        <h1 className="font-bold text-xl md:text-4xl text-center">Products</h1>
        <div className="w-12/12 flex flex-wrap gap-y-5 gap-x-10 justify-center mt-20">
            {
                products.map((item:any,index:number) =>(
                    <div key={index} 
                    className="w-5/12 " >
                        <img 
                        className="rounded-xl w-full h-56 object-cover "
                            src={`${item.thumbnail}`}
                         
                            alt={`${item.title}`}
                       />
                        <div >
                    <h1 className="text-2xl font-bold mt-5">{item.title}</h1>
                    <p className="text-lg ">{item.description}</p>
                    <p className="text-xl text-purple-700 font-bold "> Price: {item.price}</p>
                    <button
                    onClick={()=>dispatch(addCart(item))}
                     className="bg-purple-600 p-3 rounded-2xl mt-4 text-white font-smeibold hover:bg-purple-700">
                        Add to cart
                    </button>
                    </div>
                    </div>
                ))
            }
        </div>
</div>
    )

}

export default Products;