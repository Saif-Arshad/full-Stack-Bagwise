"use client"

import { Provider } from "react-redux";
import { store } from "../store/store";


export function reduxProviders({ children }) {
  return(
   <Provider store={store}>
    {children}
    </Provider>
  )
}