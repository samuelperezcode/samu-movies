import './Login.css'
import logo from '..//../assets/react.svg'

function Login() {
  return (
    <section className="login">
      <section className="login-container">
        <h2>Iniciar Secion</h2>
        <form action="" className="login-container--form">
          <input type="text" className="search-bar" placeholder="Nombre"/>
          <input type="password" className="search-bar" placeholder="Contraseña" />
          <button className="button">Ingresar</button>
          <div className="login-container--remember-me">
            <a href="">Olvidaste tu contraseña ?</a>
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
        <p className="login-container--register">No tienes ninguna cuenta? <a href="">Registrarte</a></p>
      </section>
    </section>
  )
}

export default Login