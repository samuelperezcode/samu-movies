import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/store'
import { useUserActions } from '../hooks/useUserActions'
import { useAuth } from '../hooks/useAuth'
import Layout from '../components/Layout'

function Perfil () {
  const { account, users } = useAppSelector(state => state.user)
  const { handleDeleteUser, handleEditUser, handleLogoutUser } = useUserActions()
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleClickDelete = () => {
    const id = account.id
    handleLogoutUser()
    handleDeleteUser({ id })
    logout()
    navigate('/login')
  }

  const handleClickEdit = () => {
    // TODO: Modal, to subscribe account info
    handleEditUser()
  }

  return (
    <Layout>
      <section>
        <h1>Perfil</h1>
        <article>
          <h3>{account.name}</h3>
          <p>{account.correo}</p>
          <button onClick={handleClickDelete} className='button'>Delete Account</button>
          <button onClick={handleClickEdit} className='button'>Edit Account</button>
        </article>
        <ul>
          {
          users.map(user => {
            return <li key={user.id}>{user.name}, email: {user.correo}</li>
          })
        }
        </ul>
      </section>
    </Layout>
  )
}

export default Perfil
