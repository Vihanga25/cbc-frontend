import { useState } from 'react'
import LoginPage from './pages/loginpage'
import HomePage from './pages/homePage'
import { BrowserRouter } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <LoginPage/>
        <HomePage/>
      
      </BrowserRouter>
      
     
    

    </div>
   
  )
}

export default App
