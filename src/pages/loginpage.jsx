import { useState } from "react"

export default function LoginPage(){

const [email,setEmail]=useState("Your Email")
const [password,setPassword]= useState("")

return ( 
    <div className="bg-slate-500 w-screen h-screen flex flex-col items-center justify-center" >

        <div className="bg-blue-400 w-[350px] h-[350px] flex flex-col items-center justify-center">
        
        <img src="/images.png"  className="rounded-full w-[100px]"/>
       
        <h1 className="font-semibold">Login Page</h1>

        
        <span>Email</span>

        <input defaultValue={email} type ="text" placeholder="Enter your username"/>

        <span>Password </span>

        <input defaultValue={password} type = "Password" placeholder ="Enter your Password"/>

        <button >Login</button>
        </div>
    </div>
)

}