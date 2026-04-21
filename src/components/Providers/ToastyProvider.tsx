"use client"

import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";

 

const ToastyProvider = () => {

    const {theme}=useTheme();
    
    return (
        <ToastContainer
			position="bottom-center"
			autoClose={1500}
			theme={theme === "dark" ? "dark" : "light"}
		/>
    );
}

export default ToastyProvider;