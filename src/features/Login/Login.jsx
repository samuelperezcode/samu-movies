import './Login.css'
import logo from '..//../assets/react.svg'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <section className="login">
      <section className="login-container">
        <h2>Iniciar Secion</h2>
        <form action="" className="login-container--form">
          <input type="text" className="search-bar" placeholder="Nombre"/>
          <input type="password" className="search-bar" placeholder="Contraseña" />
          <Link to='/' className="button">Ingresar</Link>
          <div className="login-container--remember-me">
            <Link to='#' >Olvidaste tu contraseña ?</Link>
          </div>
        </form>
        <section className="login-container--social-media">
          <div>
            <img src={logo} alt="" />
            <a href=""> Iniciar sesion con google</a>
          </div>
          <div>
            <img src={logo} alt="" />
            <a href="">Iniciar sesion con twitter</a>
          </div>
        </section>
        <p className="login-container--register">No tienes ninguna cuenta? <Link to="/register">Registrarte</Link></p>
      </section>
    </section>
  )
}

export default Login