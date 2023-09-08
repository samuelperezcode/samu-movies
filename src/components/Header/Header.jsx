import './Header.css'
import { IconLogo, IconUser } from '../Icons'

function Header() {
  return (
    <header>
     <a href="#" className='header-logo'>
      <IconLogo />
      <h3 className='header-logo--text'>Samu-Movies</h3>
     </a>
     <nav className='header-menu'>
      <div className='header-menu--profile'>
        <IconUser />
      </div>
      <ul className='header-menu--links'>
        <li><a href="#">Cuenta</a></li>
        <li><a href="#">Cerrar Sesion</a></li>
      </ul>

     </nav>

    </header>
  )
}

export default Header