
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Components/Pages/Dashboard'
import SignUp from './Components/Pages/SignUp'
import SignIn from './Components/Pages/SignIn'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import LandingPage from './Components/Pages/LandingPage'
import Signik from './Components/Pages/Signik'


function App() {

  return (
    <>
      <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/formik" element={<Signik/>} />
      </Routes>
    </>
  )
}

export default App
