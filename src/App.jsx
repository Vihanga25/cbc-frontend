import { useState } from 'react'
import LoginPage from './pages/loginpage'
import HomePage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element ={<HomePage/>}/>
          <Route path = "/login" element ={<LoginPage/>}/>
          <Route path = "*" element ={<h1>404 Error</h1>}/>

        </Routes>

        
        
      
      </BrowserRouter>
      
     
    

    </div>
   
  )
}

export default App
