import { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useUserActions } from '../../hooks/useUserActions'
import { useAuth } from '../../hooks/useAuth'

function Register () {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })
  const { handleCreateUser } = useUserActions()
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      setForm(form)
      handleCreateUser(form)
      login()
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <section className='register'>
      <section className='register-container'>
        <h2>Registrate</h2>
        <form action='' className='register-container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='search-bar'
            type='text'
            placeholder='Nombre'
            onChange={handleChange}
          />
          <input
            name='email'
            className='search-bar'
            type='email'
            placeholder='Correo'
            onChange={handleChange}
          />
          <input
            name='password'
            className='search-bar'
            type='password'
            placeholder='Contraseña'
            onChange={handleChange}
          />
          <button className='button'>Registrar</button>
        </form>
        <Link to='/login' className='register-container--link'>Ya tienes una cuenta? <strong>Ingresa</strong></Link>
      </section>
    </section>
  )
}

export default Register
