import './App.css'
import Front from './Components/Front/Front'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
  <>
 
  <Routes>
    <Route path='/' element={<Front/>}/>
    </Routes>
  </>
  )
}

export default App
