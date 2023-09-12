import './Header.css'
import { Link } from 'react-router-dom'
import { IconLogo, IconUser } from '../Icons'
import { useAuth } from '../../hooks/useAuth'
import { useAppSelector } from '../../hooks/store'

function Header () {
  const { account } = useAppSelector(state => state.user)
  const { logout } = useAuth()
  const handleClick = () => {
    // TODO: Make logout set context false, before nav to /login
    logout()
  }
  return (
    <header>
      <Link to='/' className='header-logo'>
        <IconLogo />
        <h3 className='header-logo--text'>Samu-Movies</h3>
      </Link>
      <nav className='header-menu'>
        <div className='header-menu--profile'>
          <IconUser />
        </div>
        <ul className='header-menu--links'>
          <li><Link to={`/perfil/${account.name}`}>Cuenta</Link></li>
          <li><Link onClick={handleClick} to='/login'>Cerrar Sesion</Link></li>
        </ul>

      </nav>

    </header>
  )
}

export default Header
