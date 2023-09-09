import './Register.css'

function Register() {
  return (
    <section className="register">
      <section className="register-container">
      <h2>Registrate</h2>
      <form action="" className="register-container--form">
        <input className="search-bar" type="text" />
        <input className="search-bar" type="text" />
        <input className="search-bar" type="text" />
        <button className="button">Registrar</button>
      </form>
      <a href="/login">Ya tienes una cuenta? <strong>Ingresa</strong></a>
      </section>
    </section>
  )
}

export default Register