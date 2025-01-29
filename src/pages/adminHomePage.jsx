import { Link } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";

export default function AdminHomePage(){

return(
    <div className= "bg-blue-300 w-full h-screen flex">
    
    <div className="w-[300px] h-screen bg-blue-600 flex flex-col items-center py-5 ">

    <Link className="flex flex-row items-center mb-5 text-slate-200 hover:text-red-400 " to ="/admin/dashboard">
    <BsGraphUp />Dashboard</Link>

    <Link className="flex flex-row items-center mb-5 text-slate-200 hover:text-red-400" to ="/admin/products">
    <AiOutlineProduct />Products</Link>

    <Link className="flex flex-row items-center mb-5 text-slate-200 hover:text-red-400" to ="/admin/orders">
    <MdProductionQuantityLimits />Orders</Link>

    <Link className="flex flex-row items-center mb-5 text-slate-200 hover:text-red-400" to ="/admin/customers">
    <IoPeopleSharp />Customers</Link>
    </div>

    <div className="bg-red-500 w-[80%] h-screen">
        <Routes path="/*">
        <Route path="/dashboard" element ={<h1>Dashboard</h1>}/>
        <Route path="/products" element ={<h1>Products</h1>}/>
        <Route path="/orders" element ={<h1>Orders</h1>}/>
        <Route path="/customers" element ={<h1>Customers</h1>}/>
        <Route path="/*" element ={<h1>404 error</h1>}/>
        </Routes>
    </div>

    </div>




);




}