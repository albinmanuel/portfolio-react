import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Body from './Components/Body/Body'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/Notfound/Notfound'
import Intro from './Components/Intro/Intro'

function App() {

  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Intro/>} />
    <Route path='/body' element={<Body/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path="*" element={<NotFound />} />
   </Routes>
   <Footer/>
   </>
  )
}

export default App
