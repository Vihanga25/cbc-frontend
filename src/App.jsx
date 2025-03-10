import { useState } from 'react';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import HomePage from './pages/homePage';
import AdminHomePage from './pages/adminHomePage';

import { Toaster } from 'react-hot-toast';

function App() {

  
  const [count, setCount] = useState(0)


  return (
    <div className='bg-primary'>
      <BrowserRouter>

      <Toaster position="top-center"/>

        <Routes path="/*">
          <Route path="/*" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminHomePage />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
