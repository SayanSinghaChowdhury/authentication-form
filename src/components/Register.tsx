"use client"

import { registerSchema, RegisterSchemaType } from "@/lib/zodSchema";

import { registerAtom } from "@/lib/atoms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSetAtom } from "jotai";
import { LoaderIcon, SendHorizonal } from "lucide-react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "./shadcnui/button";
import { Field, FieldError, FieldLabel } from "./shadcnui/field";
import { Input } from "./shadcnui/input";

const Register = () => {
 const setRegister=useSetAtom(registerAtom)

 const {push}=useRouter()

  

    const { reset, handleSubmit,control,formState:{isSubmitting}} = useForm({
        resolver:zodResolver(registerSchema),
        defaultValues:{
            name:"",
            email:"",
            password:"",
            
        },
        mode:"all",

    })

    const registerHandel = async(rData:RegisterSchemaType)=>{
        await new Promise <void>((r)=> setTimeout(r,1000))

        

       

        setRegister(rData)

        toast.success("Register Successful")

          reset();

          push("/")

          



        

        

      
        

    }
    return (
 <form className="grid place-items-center w-full gap-4" onClick={handleSubmit(registerHandel)}>

  <Controller
  name="name"
  control={control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
      <Input 
        {...field}
        id={field.name}
        type="email"
        aria-invalid={fieldState.invalid}
        placeholder="Enter your Name"
        autoComplete="name"
      />
     
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

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
  
   <Button type="submit"  className={"w-full mt-2  bg-amber-600 hover:bg-amber-600/30"}>
  {/* {
    isSubmitting ? <> <LoaderIcon className="animate-spin mr-2"/>Processing...</>:<><LogsIcon/>  Login</> 
  } */}

  {
    isSubmitting ? <><LoaderIcon className="animate-spin mr-2"/>Processing...</> :<><SendHorizonal className="animate-pulse mr-2"/>Register</>
  }
  </Button>


        
        </form>
    );
}

export default Register;