import Home from './features/Home'
import Login from './features/Login/Login'
import Perfil from './features/Perfil'
import Register from './features/Register/Register'
import Page404 from './features/404'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import ProtectedRoute from './components/ProtectedRoute'

function App () {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/perfil/:slug' element={<ProtectedRoute><Perfil /> </ProtectedRoute>} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
