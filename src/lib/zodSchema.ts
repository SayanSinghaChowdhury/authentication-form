import z from "zod";


// login schema
 export const loginSchema = z.object({
    email: z.string({error:"Email is required"}).endsWith("@gmail.com",{error:"Email must end with @gmail.com"}),

    password: z.string().length(8,{error:"Password must be 8 characters "})
  });

 export type LoginSchemaType =z.infer<typeof loginSchema>


// register schema

export const registerSchema =z.object({
  name:z.string({error:"enter your Name "}).min(2).max(36),

  email: z.string({error:"Email is required"}).endsWith("@gmail.com",{error:"Email must end with @gmail.com"}),

  password: z.string().length(8,{error:"Password must be 8 characters "})
  
})

export type RegisterSchemaType = z.infer<typeof registerSchema>