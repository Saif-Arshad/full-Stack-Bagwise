"use clinet"

import React from 'react'
import { BsCartCheck } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { showCart, removeCartItem } from '@/Redux/feature/cartSlice';
function Cart() {
 const cartVisibility =  useSelector((state:any)=>state.cart.cartSection)
 const cartData =  useSelector((state:any)=>state.cart)
 const cartOrder = cartData.cart;
 const cartPrice = cartData.totalPrice;
 ;

 
 const dispatch = useDispatch()
    const cartHandler=()=>{
      if(cartVisibility){
        dispatch(showCart(false))
      }
      else{
        dispatch(showCart(true))

      }
     
    }
    const deleteHandler = (item: any) => {
      const deleteReq = window.confirm(`Are you sure you want to delete ${item.title}`);
      if (deleteReq) {
        dispatch(removeCartItem(item));
      }
    };
    console.log(cartOrder)
  return (
    <div className=''>
     <BsCartCheck size={20} onClick={cartHandler} className='cursor-pointer' color='purple' />
     <div className={`overflow-y-scroll h-3/4 ${!cartVisibility? "translate-x-full" : "translate-x-0"} transition-all rounded-xl w-60 md:w-4/12 -right-3 md:-right-14 top-24 bg-slate-100 fixed`}>
        <div  className='px-4 py-2 '>
          <div>
        <h1  className='text-xl font-bold'>Cart</h1>
        <h3 className='text-lg font-bold'>Total:{cartPrice} PKR </h3>
        </div>
{ Object.keys(cartOrder).length ? 
        <div className='mt-10 flex flex-col gap-y-8'>
        { cartOrder.map((item:any,index:number)=>{
         return(
          <div key={index} className='flex flex-row gap-x-3'>
              <img src={`${item.thumbnail}`} className='w-30 h-20 object-contain rounded-md'/>
                <div className='flex flex-col '>
                  <span className='font-semibold flex flex-wrap w-full'>{item.title}</span>
                  <span>Price: {item.price}PKR</span>
                  <span>Quantity: {item. quantity}</span>
                </div>
                <button  onClick={() => deleteHandler(item)} className='ml-2 bg-red-600 p-2 h-9 rounded-lg flex justify-center text-white'>Delete</button>
          </div>
         )
  })}</div>

:
<p className='mt-10'>Your Cart is Empty</p>

    
}
        </div>
     </div>
    </div>
  )
}

export default Cart
