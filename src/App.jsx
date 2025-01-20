import { useState } from 'react'
import LoginPage from './pages/loginpage'
import HomePage from './pages/homePage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LoginPage/>
      <HomePage/>
     
    

    </div>
   
  )
}

export default App
