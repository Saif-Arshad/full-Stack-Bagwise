"use client"
import { useTheme } from "next-themes";
import react,{useState} from "react";


function useToggleTheme(){
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        if (theme === 'dark') {
          setTheme('light');
        } else {
          setTheme('dark');
        }
      };

}
export default useToggleTheme
