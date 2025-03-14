import { Route, Routes } from 'react-router-dom';
import LoginPage from './loginpage';
import ProductOverview from './home/productOverview';
import ProductPage from './home/product';
import Cart from './home/cart';
import Header from '../component/header';
import HomeImageSlider from '../component/homeImage';
import Shipping from './home/shipping';


export default function HomePage() {
  return (
    <div className="h-screen w-full">
     <div className="w-full h-[40px] bg-primary text-accent flex justify-center items-center">
  <p className="animate-pulse">Welcome to the Crystal Beauty Care</p>
  </div>
      <Header />
      <div className='w-full h-[calc(100vh-100px)] '>
        <Routes path="/*">
          <Route path="/" element={<HomeImageSlider/>} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/cart" element={<Cart/>} />      
          <Route path="/productInfo/:id" element={<ProductOverview/>} />
          <Route path = "/shipping" element={<Shipping/>}/>
        </Routes>  
        
      </div>
        
    </div>
  ); 
}
