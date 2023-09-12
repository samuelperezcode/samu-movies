import './Login.css'
import logo from '..//../assets/react.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useUserActions } from '../../hooks/useUserActions'
import { useAuth } from '../../hooks/useAuth'

function Login () {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const { login } = useAuth()
  const redirectTo = useLocation().state?.pathname ?? '/'

  const { handleLoginUser } = useUserActions()

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      handleLoginUser(form)
      login()
      navigate(redirectTo)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section className='login'>
      <section className='login-container'>
        <h2>Iniciar Secion</h2>
        <form action='' className='login-container--form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name='email' type='email' className='search-bar' placeholder='Correo' />
          <input onChange={handleChange} name='password' type='password' className='search-bar' placeholder='Contraseña' />
          <button className='button'>Ingresar</button>
          <div className='login-container--remember-me'>
            <Link to='#'>Olvidaste tu contraseña ?</Link>
          </div>
        </form>
        <section className='login-container--social-media'>
          <div>
            <img src={logo} alt='' />
            <a href=''> Iniciar sesion con google</a>
          </div>
          <div>
            <img src={logo} alt='' />
            <a href=''>Iniciar sesion con twitter</a>
          </div>
        </section>
        <p className='login-container--register'>No tienes ninguna cuenta? <Link to='/register'>Registrarte</Link></p>
      </section>
    </section>
  )
}

export default Login
