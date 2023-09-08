import './Header.css'
import logo from '../../assets/react.svg'

function Header() {
  return (
    <header>
     <a href="#" className='header-logo'>
      <img src={logo} alt="logo" width='px' height='32px' />
     </a>
     <nav className='header-menu'>
      <div className='header-menu--profile'>
        <img src={logo} alt="" />
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