import { useState } from 'react';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import HomePage from './pages/homePage';
import AdminHomePage from './pages/adminHomePage';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ShippingPage from './pages/home/shipping';
import Footer from './component/footer';

function App() {

  
  const [count, setCount] = useState(0)


  return (
    <div className='bg-primary'>
      <BrowserRouter>

      <Toaster position="top-center"/>
      <GoogleOAuthProvider clientId='275590952250-d8pv3hgllqp8gdgit5h7oqb3ncksl76o.apps.googleusercontent.com'>
        <Routes path="/*">
          <Route path="/*" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminHomePage />} />
          <Route path ="/shipping" element={<ShippingPage/>}/>
        
        </Routes>
        </GoogleOAuthProvider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
