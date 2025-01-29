import { useState } from 'react'
import LoginPage from './pages/loginpage'
import HomePage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomePage from './pages/adminHomePage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes path ="/*">
          <Route path = "/" element ={<HomePage/>}/>
          <Route path = "/login" element ={<LoginPage/>}/>
          <Route path = "/admin/*" element ={<AdminHomePage/>}/>
          <Route path = "/signup" element ={<UserData/>}/>
          <Route path = "/*" element ={<h1>404 error </h1>}/>

        </Routes>
      
      </BrowserRouter>

    </div>
   
  )
}

export default App
