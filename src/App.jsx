import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/About'
import Skills from './components/Skills'
import Proyectos from './components/Proyectos'
import Contact from './components/Contact'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path='/proyectos' element={<Proyectos />}/>
          <Route path='/contacto' element={<Contact />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
