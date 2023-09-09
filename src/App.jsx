import Home from "./features/Home"
import Login from "./features/Login/Login"
import Perfil from "./features/Perfil"
import Register from "./features/Register/Register"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/login" element={<Login />}  />
      <Route path="/register" element={<Register />}  />
      <Route path="/perfil/:slug" element={<Perfil />}  />
    </Routes>
  )
}

export default App
