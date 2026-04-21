"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ComponentProps } from "react";
import ToastyProvider from "./ToastyProvider";

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>
    
    {children} 
    
    <ToastyProvider/> 
    
    </NextThemesProvider>;
};

export default ThemeProvider;
