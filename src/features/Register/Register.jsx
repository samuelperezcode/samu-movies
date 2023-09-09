import './Register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <section className="register">
      <section className="register-container">
      <h2>Registrate</h2>
      <form action="" className="register-container--form">
        <input className="search-bar" type="text" />
        <input className="search-bar" type="text" />
        <input className="search-bar" type="text" />
        <Link to='/' className="button">Registrar</Link>
      </form>
      <Link to="/login" className='register-container--link'>Ya tienes una cuenta? <strong>Ingresa</strong></Link>
      </section>
    </section>
  )
}

export default Register