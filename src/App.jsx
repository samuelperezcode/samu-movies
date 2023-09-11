import Home from './features/Home'
import Login from './features/Login/Login'
import Perfil from './features/Perfil'
import Register from './features/Register/Register'
import Page404 from './features/404'
import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/perfil/:slug' element={<Perfil />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

export default App
