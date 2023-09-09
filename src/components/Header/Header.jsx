import './Header.css'
import { Link } from 'react-router-dom'
import { IconLogo, IconUser } from '../Icons'

function Header() {
  return (
    <header>
     <Link to="/" className='header-logo'>
      <IconLogo />
      <h3 className='header-logo--text'>Samu-Movies</h3>
     </Link>
     <nav className='header-menu'>
      <div className='header-menu--profile'>
        <IconUser />
      </div>
      <ul className='header-menu--links'>
        <li><Link to="/perfil">Cuenta</Link></li>
        <li><Link to="/login">Cerrar Sesion</Link></li>
      </ul>

     </nav>

    </header>
  )
}

export default Header