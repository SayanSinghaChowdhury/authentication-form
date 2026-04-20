"use client";

import { registerAtom } from "@/lib/atoms";
import { loginSchema, LoginSchemaType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtomValue } from "jotai";
import { LoaderIcon, LogsIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "./shadcnui/button";
import { Field, FieldError, FieldLabel } from "./shadcnui/field";
import { Input } from "./shadcnui/input";


const Login = () => {

  const rData = useAtomValue(registerAtom)

  

    const { handleSubmit ,reset, control, formState:{isSubmitting} }=useForm({
        resolver:zodResolver(loginSchema),

        defaultValues:{
            email:"",
            password:""
        },

        mode:"all",
    })
    
    const loginHandle = async(lData:LoginSchemaType)=>{
        await new Promise<void>((l)=>setTimeout(l,1000))

      // console.log(rData);

      // console.log(lData);


      if (lData.email === rData.email && lData.password === rData.password) {
        toast.success(`Login Successful ${rData.name}`)


        reset()


        
      } else {
        if (lData.email !== rData.email && lData.password !== rData.password){

          toast.error("Incorrect email & password")

          reset()


        }


        if(lData.email !== rData.email){

          
           toast.error("Incorrect email. Please try again.")

           reset()


        }

        if ( lData.password !== rData.password) {

            toast.error("Incorrect password. Please try again.")

            reset()
          
        }
        
      }

       
        

        reset()
        


    }

    return (
<form className="grid place-items-center w-full gap-4" onClick={handleSubmit(loginHandle)}>

 <Controller
  name="email"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
      <Input 
        {...field}
        id={field.name}
        type="email"
        aria-invalid={fieldState.invalid}
        placeholder="Enter your email"
        autoComplete="email"
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Controller
  name="password"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      
      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="password"
        aria-invalid={fieldState.invalid}
        placeholder="Enter your password"
        autoComplete="current-password"
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>

   
  )}
/>
  
   <Button type="submit"  className={"bg-taupe-200 w-full mt-2 hover:bg-taupe-100"}>
  {
    isSubmitting ? <> <LoaderIcon className="animate-spin mr-2"/>Processing...</>:<><LogsIcon/>  Login</> 
  }
  </Button>


        
        </form>
    );
}

export default Login;