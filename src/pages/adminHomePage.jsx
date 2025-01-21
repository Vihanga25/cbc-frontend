import { Link } from "react-router-dom";

export default function AdminHomePage(){

return(
    <div className= "bg-blue-300 w-full h-screen flex">
    
    <div className="w-[300px] h-screen bg-blue-600 flex flex-col items-center">

    <Link to ="/admin/dashboard">Dashboard</Link>
    <Link to ="/admin/products">Products</Link>
    <Link to ="/admin/orders">Orders</Link>
    <Link to ="/admin/customers">Customers</Link>
    </div>

    <div className="bg-red-500 w-[80%] h-screen"></div>
    

    </div>




)




}