import { Route, Routes } from 'react-router-dom';
import LoginPage from './loginpage';
import ProductOverview from './home/productOverview';
import ProductPage from './home/product';
import Cart from './home/cart';
import Header from '../component/header';


export default function HomePage() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className='w-full h-[calc(100vh-100px)] '>
        <Routes path="/*">
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/cart" element={<Cart/>} />      
          <Route path="/productInfo/:id" element={<ProductOverview/>} />
        </Routes>  
      </div>
        
    </div>
  ); 
}
